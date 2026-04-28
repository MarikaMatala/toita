package com.example.builduiwithlayouteditor2

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // show first employee data
        showEmployeeData(0)
    }


    val firstnames = arrayOf("Renato", "Rosangela", "Tim", "Bartol", "Jeannette")
    val lastnames = arrayOf("Ksenia", "Metzli", "Asuncion", "Zemfina", "Giang")
    val jobtitles = arrayOf("District Quality Coordinator","International Intranet Representative","District Intranet Administrator","Dynamic Research Manager","Central Infrastructure Consultant")

    // function displays employees data in UI
    fun showEmployeeData(index: Int) {
        // find TextView's from the UI layout file
        val firstnameTextView = findViewById<TextView>(R.id.firstnameTextView)
        val lastnameTextView = findViewById<TextView>(R.id.lastnameTextView)
        val jobtitleTextView = findViewById<TextView>(R.id.jobtitleTextView)
        val employeeInfoTextView = findViewById<TextView>(R.id.employeeInfoTextView)
        // Update TextView texts
        firstnameTextView.text = firstnames[index];
        lastnameTextView.text = lastnames[index];
        jobtitleTextView.text = jobtitles[index];
        // info is
        employeeInfoTextView.text = getString(R.string.employee_info_text, lastnames[index], firstnames[index], getString(R.string.basic_text))

        // image
        var id = 0;
        when(index) {
            0 -> id = R.drawable.employee1
            1 -> id = R.drawable.employee2
            2 -> id = R.drawable.employee3
            3 -> id = R.drawable.employee4
            4 -> id = R.drawable.employee5
        }
        // find imageView and display correct employee image
        val imageView = findViewById<ImageView>(R.id.imageView)
        imageView.setImageResource(id)
    }

    fun numberClicked(view: View?) {
        val text = (view as TextView).text.toString()
        val int = text.toInt() - 1
        showEmployeeData(int)
    }

}