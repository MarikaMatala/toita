package com.example.golfcoursesinamap

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.TextView
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import com.example.golfcoursesinamap.databinding.ActivityMapsBinding
import com.google.android.gms.maps.model.BitmapDescriptorFactory
import com.google.android.gms.maps.model.Marker
import org.json.JSONArray

class MapsActivity : AppCompatActivity(), OnMapReadyCallback {

    private lateinit var mMap: GoogleMap
    private lateinit var binding: ActivityMapsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMapsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        val mapFragment = supportFragmentManager
            .findFragmentById(R.id.map) as SupportMapFragment
        mapFragment.getMapAsync(this)
    }


    private fun loadData() {
        val queue = Volley.newRequestQueue(this)
        val url = "https://ptm.fi/materials/golfcourses/golf_courses.json"
        var golfCourses: JSONArray
        var courseTypes: Map<String, Float> = mapOf(
            "?" to BitmapDescriptorFactory.HUE_VIOLET,
            "Etu" to BitmapDescriptorFactory.HUE_BLUE,
            "Kulta" to BitmapDescriptorFactory.HUE_GREEN,
            "Kulta/Etu" to BitmapDescriptorFactory.HUE_YELLOW
        )

        // create JSON request object
        val jsonObjectRequest = JsonObjectRequest(
            Request.Method.GET, url, null,
            { response ->
                // JSON loaded successfully
                golfCourses = response.getJSONArray("courses")
                // loop through all objects
                for (i in 0 until golfCourses.length()){
                    // get course data
                    val course = golfCourses.getJSONObject(i)
                    val lat = course["lat"].toString().toDouble()
                    val lng = course["lng"].toString().toDouble()
                    val latLng= LatLng(lat, lng)
                    val type = course["type"].toString()
                    val title = course["course"].toString()
                    val address = course["address"].toString()
                    val phone = course["phone"].toString()
                    val email = course["email"].toString()
                    val webUrl = course["web"].toString()

                    if (courseTypes.containsKey(type)){
                        val m = mMap.addMarker(
                            MarkerOptions()
                                .position(latLng)
                                .title(title)
                                .icon(BitmapDescriptorFactory
                                    .defaultMarker(courseTypes.getOrDefault(type, BitmapDescriptorFactory.HUE_RED)
                                    )
                                )
                        )
                        // pass data to marker via Tag
                        val list = listOf(address, phone, email, webUrl)
                        m!!.tag = list
                    } else {
                        Log.d("GolfCourses", "This course type does not exist in evaluation $type")
                    }
                }
                mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(LatLng(65.5, 26.0),5.0F))

            },
            { error ->
                // Error loading JSON
            }
        )
        // Add the request to the RequestQueue
        queue.add(jsonObjectRequest)
        mMap.setInfoWindowAdapter(CustomInfoWindowAdapter())
    }


    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap
        loadData()
    }

    internal inner class CustomInfoWindowAdapter : GoogleMap.InfoWindowAdapter {
        private val contents: View = layoutInflater.inflate(R.layout.info_window, null)

        override fun getInfoWindow(marker: Marker): View? {
            return null
        }

        override fun getInfoContents(marker: Marker): View {
            // UI elements
            val titleTextView = contents.findViewById<TextView>(R.id.titleTextView)
            val addressTextView = contents.findViewById<TextView>(R.id.addressTextView)
            val phoneTextView = contents.findViewById<TextView>(R.id.phoneTextView)
            val emailTextView = contents.findViewById<TextView>(R.id.emailTextView)
            val webTextView = contents.findViewById<TextView>(R.id.webTextView)
            // title
            titleTextView.text = marker.title.toString()
            // get data from Tag list
            if (marker.tag is List<*>){
                val list: List<String> = marker.tag as List<String>
                addressTextView.text = list[0]
                phoneTextView.text = list[1]
                emailTextView.text = list[2]
                webTextView.text = list[3]
            }
            return contents
        }
    }

}