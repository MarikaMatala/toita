package com.example.employeesapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import org.json.JSONArray
import org.json.JSONObject


class MainActivity : AppCompatActivity() {
    // Define recyclerView
    private lateinit var recyclerView: RecyclerView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Find recyclerView from the layout
        recyclerView = findViewById<RecyclerView>(R.id.recyclerView)
        // Use LinearManager as a layout manager for recyclerView
        recyclerView.layoutManager = LinearLayoutManager(this)

        // start loading JSON data
        loadJSON()
    }

    private fun loadJSON() {
        // Instantiate the RequestQueue
        val queue = Volley.newRequestQueue(this)
        // URL to JSON data - remember use your own URL here
        val url = "https://ptm.fi/data/android_employees.json"
        // Create request and listeners
        val jsonObjectRequest = JsonObjectRequest(Request.Method.GET, url, null,
            { response ->
                // Get employees from JSON
                val employees = response.getJSONArray("employees")
                // Create Employees Adapter with employees data
                recyclerView.adapter = EmployeesAdapter(employees)
                Log.d("JSON", employees.toString())
            },
            { error ->
                Log.d("JSON", error.toString())
            }
        )
        // Add the request to the RequestQueue.
        queue.add(jsonObjectRequest)
    }

    // Employees Adapter, used in RecyclerView in MainActivity
    class EmployeesAdapter(private val employees: JSONArray)
        : RecyclerView.Adapter<EmployeesAdapter.ViewHolder>() {

        // Create UI View Holder from XML layout
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int)
                : EmployeesAdapter.ViewHolder {
            val layoutInflater = LayoutInflater.from(parent.context)
            val view = layoutInflater.inflate(R.layout.employee_item, parent, false)
            return ViewHolder(view)
        }

        // View Holder class to hold UI views
        inner class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
            val nameTextView: TextView = view.findViewById(R.id.nameTextView)
            val titleTextView: TextView = view.findViewById(R.id.titleTextView)
            val emailTextView: TextView = view.findViewById(R.id.emailTextView)
            val phoneTextView: TextView = view.findViewById(R.id.phoneTextView)
            val departmentTextView: TextView = view.findViewById(R.id.departmentTextView)
            val imgImageView: ImageView = view.findViewById(R.id.imageView)

            // Add a item click listener
            init {
                itemView.setOnClickListener {
                    // remove or comment earlier Toast-message

                    // create an explicit intent
                    val intent = Intent(view.context, EmployeeActivity::class.java)
                    // add selected employee JSON as a string data
                    intent.putExtra("employee",employees[adapterPosition].toString())
                    // start a new activity
                    view.context.startActivity(intent)
                }
            }
        }

        // Bind data to UI View Holder
        override fun onBindViewHolder(
            holder: EmployeesAdapter.ViewHolder,
            position: Int) {
            // employee to bind UI
            val employee: JSONObject = employees.getJSONObject(position)
            // employee lastname and firstname
            // TASK: you can modify this to use formatting strings with placeholders
            holder.nameTextView.text =
                employee["lastName"].toString() + " " + employee["firstName"].toString()
            holder.titleTextView.text =
                employee["title"].toString()
            holder.phoneTextView.text =
                employee["phone"].toString()
            holder.emailTextView.text =
                employee["email"].toString()
            holder.departmentTextView.text =
                employee["department"].toString()
            Glide.with(holder.imgImageView.context).load(employee["image"].toString()).circleCrop()
                .into(holder.imgImageView)
        }
        // Return item count in employees
        override fun getItemCount(): Int = employees.length()

    }

}
