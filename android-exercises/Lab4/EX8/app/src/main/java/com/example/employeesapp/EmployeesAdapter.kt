package com.example.employeesapp

import android.content.Intent
import android.media.Image
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.AppWidgetTarget
import org.json.JSONArray
import org.json.JSONObject

class EmployeesAdapter(private val employees: JSONArray)
        : RecyclerView.Adapter<EmployeesAdapter.ViewHolder>() {

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
        val imageView: ImageView = view.findViewById(R.id.imageView)

        init {
            itemView.setOnClickListener {
                val intent = Intent(view.context, EmployeeActivity::class.java)
                // add selected employee JSON as a string data
                intent.putExtra("employee",employees[adapterPosition].toString())
                // start a new activity
                view.context.startActivity(intent)
            }
        }


    }


    override fun onBindViewHolder(
        holder: EmployeesAdapter.ViewHolder,
        position: Int)
    {
        // employee to bind UI
        val employee: JSONObject = employees.getJSONObject(position)
        // employee lastname and firstname
        // TASK: you can modify this to use formatting strings with placeholders
        Glide.with(holder.imageView.context).load(employee["image"]).into(holder.imageView)
        holder.nameTextView.text =
            employee["lastName"].toString()+" "+ employee["firstName"].toString()
        holder.titleTextView.text =
            employee["title"].toString()
        holder.emailTextView.text =
            employee["email"].toString()
        holder.phoneTextView.text =
            employee["phone"].toString()
        holder.departmentTextView.text =
            employee["department"].toString()
    }

    override fun getItemCount(): Int = employees.length()
}
