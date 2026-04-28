package com.example.roomshoppinglist

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ShoppingListAdapter (var shoppingList: MutableList<ShoppingListItem>)
    : RecyclerView.Adapter<ShoppingListAdapter.ViewHolder>() {

    // onCreateViewHolder
    // create UI View Holder from XML layout
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int)
            : ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val view =
            layoutInflater.inflate(R.layout.recyclerview_item, parent, false)
        return ViewHolder(view)
    }
    // ViewHolder
    // View Holder class to hold UI views
    inner class ViewHolder(view: View)
        : RecyclerView.ViewHolder(view) {
        val nameTextView: TextView = view.findViewById(R.id.nameTextView)
        val countTextView: TextView = view.findViewById(R.id.countTextView)
        val priceTextView: TextView = view.findViewById(R.id.priceTextView)
    }

    // onBindViewHolder
    // bind data to UI View Holder
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        // item to bind UI
        val item: ShoppingListItem = shoppingList[position]
        // name, count, price
        holder.nameTextView.text = item.name
        holder.countTextView.text = item.count.toString()
        holder.priceTextView.text = item.price.toString()
    }

    // getItemCount

    // return shopping list size
    override fun getItemCount(): Int = shoppingList.size


    // update
    // update data inside adapter
    fun update(newList: MutableList<ShoppingListItem>) {
        shoppingList = newList
        notifyDataSetChanged()
    }
}
