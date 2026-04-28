package com.example.employeesapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import com.bumptech.glide.Glide
import org.json.JSONObject

class EmployeeActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_employee)

        // get data from intent
        val bundle: Bundle? = intent.extras
        if (bundle != null) {
            val employeeString = bundle.getString("employee")

            if (employeeString != null) {
                val employee = JSONObject(employeeString)
                val image = employee["image"]
                val name = employee["firstName"]
                val title = employee["title"]
                val phone = employee["phone"]
                val department = employee["department"]
                val email = employee["email"]
               // Toast.makeText(this, "$image",Toast.LENGTH_LONG).show()

                val imageViewFocused = findViewById<ImageView>(R.id.imageViewFocused)
                Glide.with(this)
                    .load(image)
                    .into(imageViewFocused)

                findViewById<TextView>(R.id.name).apply {
                    text = name.toString()
                }
                findViewById<TextView>(R.id.title2).apply {
                    text = title.toString()
                }
                findViewById<TextView>(R.id.phone2).apply {
                    text = phone.toString()
                }
                findViewById<TextView>(R.id.department2).apply {
                    text = department.toString()
                }
                findViewById<TextView>(R.id.email2).apply {
                    text = email.toString()
                }
            }
        }
    }


}