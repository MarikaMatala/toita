package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
import com.example.myapplication.databinding.ActivityMapsBinding

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

    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        val oulu = LatLng(65.01236, 25.46816)
        val tampere = LatLng(61.49911, 23.78712)
        val helsinki = LatLng(60.16952, 24.93545)
        val jyvaskyla = LatLng(62.24147, 25.72088)
        val vaasa = LatLng(63.096, 21.61577)

        mMap.addMarker(MarkerOptions().position(oulu).title("Oulu").snippet("Population: 205 489"))
        mMap.addMarker(MarkerOptions().position(tampere).title("Tampere").snippet("Population: 238 420"))
        mMap.addMarker(MarkerOptions().position(helsinki).title("Helsinki").snippet("Population: 631 695"))
        mMap.addMarker(MarkerOptions().position(jyvaskyla).title("Jyväskylä").snippet("Population: 142 400"))
        mMap.addMarker(MarkerOptions().position(vaasa).title("Vaasa").snippet("Population: 66 960"))
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(oulu, 4.9F))

        mMap.uiSettings.isZoomControlsEnabled = true
    }
}