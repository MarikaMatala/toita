package com.example.launchamap

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun showMap(view:View){
        val lat = findViewById<TextView>(R.id.latEditText).text
        val lon = findViewById<TextView>(R.id.lngEditText).text
        val gmmIntentUri = Uri.parse("geo:${lat},${lon}")
        val mapIntent = Intent(Intent.ACTION_VIEW, gmmIntentUri)
        startActivity(mapIntent)
    }

}