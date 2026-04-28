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
                val name = employee["firstName"]
                Toast.makeText(this, "Name is $name",Toast.LENGTH_LONG).show()


                val nameTextView: TextView = findViewById(R.id.name2TextView)
                val titleTextView: TextView = findViewById(R.id.title2TextView)
                val emailTextView: TextView = findViewById(R.id.email2TextView)
                val phoneTextView: TextView = findViewById(R.id.phone2TextView)
                val departmentTextView: TextView = findViewById(R.id.department2TextView)
                val imgImageView: ImageView = findViewById(R.id.imageView2)
                val descriptionTextView: TextView = findViewById(R.id.descriptionTextView)
// show employees title
                Glide.with(imgImageView.context).load(employee["image"].toString()).circleCrop()
                    .into(imgImageView)
                nameTextView.text = employee["lastName"].toString() + " " + employee["firstName"].toString()
                titleTextView.text = employee["title"].toString()
                emailTextView.text = employee["email"].toString()
                phoneTextView.text = employee["phone"].toString()
                departmentTextView.text = employee["department"].toString()
                descriptionTextView.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada vehicula sapien, eget imperdiet elit euismod et. Nulla id malesuada nulla. Morbi dignissim sed lorem vel accumsan. Etiam eu euismod nisl. Aenean nec porttitor quam. Cras sagittis consectetur arcu a blandit. Aenean id est nibh. Morbi eget nulla nec orci sodales condimentum a et orci. Quisque at interdum arcu. Sed faucibus aliquet elit, rutrum scelerisque elit pulvinar non. Nullam vel mauris vel dolor condimentum maximus. Aenean nec auctor mauris."
            }


        }
    }


}
