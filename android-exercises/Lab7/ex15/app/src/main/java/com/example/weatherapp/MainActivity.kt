package com.example.weatherapp

import android.os.Bundle
import android.util.Log
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.snackbar.Snackbar
import com.google.android.material.tabs.TabLayout
import androidx.viewpager.widget.ViewPager
import androidx.appcompat.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.ProgressBar
import android.widget.Toast
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.example.weatherapp.ui.main.SectionsPagerAdapter
import com.example.weatherapp.databinding.ActivityMainBinding
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter

class MainActivity : AppCompatActivity() {

    // example call is :
    // https://api.openweathermap.org/data/2.5/weather?q=Jyväskylä&APPID=YOUR_API_KEY&units=metric&lang=fi
    val API_LINK: String = "https://api.openweathermap.org/data/2.5/weather?q="
    val API_ICON: String = "https://openweathermap.org/img/w/"
    val API_KEY: String = "dbf693a9985f3b2c81d9911f48ba100b"

    // add a few test cities
    val cities: MutableList<String> = mutableListOf("Jyväskylä", "Helsinki", "Oulu", "New York", "Tokyo")
    // city index, used when data will be loaded
    var index: Int = 0

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Load weather forecasts
        loadWeatherForecast(cities[index])
    }

    companion object {
        var forecasts: MutableList<Forecast> = mutableListOf()
    }

    // load forecast
    private fun loadWeatherForecast(city:String) {
        // url for loading
        val url = "$API_LINK$city&APPID=$API_KEY&units=metric&lang=fi"

        // JSON object request with Volley
        val jsonObjectRequest = JsonObjectRequest(
            Request.Method.GET, url, null, { response ->
                try {
                    val mainJSONObject = response.getJSONObject("main")
                    val weatherArray = response.getJSONArray("weather")
                    val firstWeatherObject = weatherArray.getJSONObject(0)

                    // city, condition, temperature
                    val city = response.getString("name")
                    val condition = firstWeatherObject.getString("main")
                    val temperature = mainJSONObject.getString("temp")+" °C"
// time
                    val weatherTime: String = response.getString("dt")
                    val weatherLong: Long = weatherTime.toLong()
                    val formatter: DateTimeFormatter = DateTimeFormatter.ofPattern("dd.MM.YYYY HH:mm:ss")
                    val dt = Instant.ofEpochSecond(weatherLong).atZone(ZoneId.systemDefault()).toLocalDateTime().format(formatter).toString()
// icon
                    val weatherIcon = firstWeatherObject.getString("icon")
                    val url = "$API_ICON$weatherIcon.png"

                    // add forecast object to the list
                    forecasts.add(Forecast(city,condition,temperature,dt,url))
// use Logcat window to check that loading really works
                    Log.d("WEATHER", "**** weatherCity = " + forecasts[index].city)
// load another city if not loaded yet
                    if ((++index) < cities.size) loadWeatherForecast(cities[index])
                    else {
                        Log.d("WEATHER", "*** ALL LOADED!")
                        setUI()
                    }
                } catch (e: Exception) {
                    e.printStackTrace()
                    Log.d("WEATHER", "***** error: $e")
                    // hide progress bar
                    val progressBar = findViewById<ProgressBar>(R.id.progressBar)
                    progressBar.visibility = View.INVISIBLE
                    // show Toast -> should be done better!!!
                    Toast.makeText(this, "Error loading weather forecast!", Toast.LENGTH_LONG)
                        .show()
                }
            },
            { error -> Log.d("PTM", "Error: $error") }
        )
        // start loading data with Volley
        val queue = Volley.newRequestQueue(applicationContext)
        queue.add(jsonObjectRequest)
    }

    private fun setUI() {
        // hide progress bar
        val progressBar = findViewById<ProgressBar>(R.id.progressBar)
        progressBar.visibility = View.INVISIBLE
        // add adapber
        val sectionsPagerAdapter = SectionsPagerAdapter(this, supportFragmentManager)
        val viewPager: ViewPager = findViewById(R.id.view_pager)
        viewPager.adapter = sectionsPagerAdapter
    }
}