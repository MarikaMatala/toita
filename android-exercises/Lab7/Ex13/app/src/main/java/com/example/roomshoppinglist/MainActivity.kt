package com.example.roomshoppinglist

import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.os.Message
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import androidx.navigation.ui.setupActionBarWithNavController
import android.view.Menu
import android.view.MenuItem
import android.widget.Toast
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import androidx.room.Room
import com.example.roomshoppinglist.databinding.ActivityMainBinding
import com.google.android.material.floatingactionbutton.FloatingActionButton

class MainActivity:
    AppCompatActivity(),
    AskShoppingListItemDialogFragment.AddDialogListener {

    // Shopping List items
    private var shoppingList: MutableList<ShoppingListItem> = ArrayList()
    // Shopping List adapter
    private lateinit var adapter: ShoppingListAdapter
    // RecyclerView
    private lateinit var recyclerView: RecyclerView

    private lateinit var db: ShoppingListRoomDatabase

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(findViewById(R.id.toolbar))

        // Find recyclerView from loaded layout
        recyclerView = findViewById(R.id.recyclerView)
        // Use LinearManager as a layout manager for recyclerView
        recyclerView.layoutManager = LinearLayoutManager(this)
        // Create Adapter for recyclerView
        adapter = ShoppingListAdapter(shoppingList)
        recyclerView.adapter = adapter

        // Create database and get instance
        db = Room.databaseBuilder(
            applicationContext,
            ShoppingListRoomDatabase::class.java,
            "hs_db"
        ).build()

// load all shopping list items
        loadShoppingListItems()

        // add a new item to shopping list
        findViewById<FloatingActionButton>(R.id.fab).setOnClickListener { view ->
            // create and show dialog
            val dialog = AskShoppingListItemDialogFragment()
            dialog.show(supportFragmentManager, "AskNewItemDialogFragment")
        }

    }

    // Load shopping list items from db
    private fun loadShoppingListItems() {
        // Create a new Handler object to display a message in UI
        val handler = Handler(Looper.getMainLooper(), Handler.Callback {
            // Toast message
            Toast.makeText(
                applicationContext,
                it.data.getString("message"),
                Toast.LENGTH_SHORT
            ).show()
            // Notify adapter data change
            adapter.update(shoppingList)
            true
        })

        // Create a new Thread to insert data to database
        Thread(Runnable {
            shoppingList = db.shoppingListDao().getAll()
            val message = Message.obtain()
            if (shoppingList.size > 0)
                message.data.putString("message","Data read from db!")
            else
                message.data.putString("message","Shopping list is empty!")
            handler.sendMessage(message)
        }).start()
    }

    // Add a new shopping list item to db
    override fun onDialogPositiveClick(item: ShoppingListItem) {
        // Create a Handler Object
        val handler = Handler(Looper.getMainLooper(), Handler.Callback {
            // Toast message
            Toast.makeText(
                applicationContext,
                it.data.getString("message"),
                Toast.LENGTH_SHORT
            ).show()
            // Notify adapter data change
            adapter.update(shoppingList)
            true
        })
        // Create a new Thread to insert data to database
        Thread(Runnable {
            // insert and get autoincrement id of the item
            val id = db.shoppingListDao().insert(item)
            // add to view
            item.id = id.toInt()
            shoppingList.add(item)
            val message = Message.obtain()
            message.data.putString("message","Item added to db!")
            handler.sendMessage(message)
        }).start()
    }

    // Initialize swipe in recyclerView
    private fun initSwipe() {
        // Create Touch Callback
        val simpleItemTouchCallback = object : ItemTouchHelper.SimpleCallback(0, ItemTouchHelper.LEFT) {
            // Swiped
            override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {
                // adapter delete item position
                val position = viewHolder.adapterPosition
                // Create a Handler Object
                val handler = Handler(Looper.getMainLooper(), Handler.Callback {
                    // Toast message
                    Toast.makeText(
                        applicationContext,
                        it.data.getString("message"),
                        Toast.LENGTH_SHORT
                    ).show()
                    // Notify adapter data change
                    adapter.update(shoppingList)
                    true
                })
                // Get remove item id
                var id = shoppingList[position].id
                // Remove from UI list
                shoppingList.removeAt(position)
                // Remove from db
                Thread(Runnable {
                    db.shoppingListDao().delete(id)
                    val message = Message.obtain()
                    message.data.putString("message","Item deleted from db!")
                    handler.sendMessage(message)
                }).start()
            }

            // Moved
            override fun onMove(
                p0: RecyclerView,
                p1: RecyclerView.ViewHolder,
                p2: RecyclerView.ViewHolder)
                    : Boolean {
                return true
            }

        }

        // Attach Item Touch Helper to recyclerView
        val itemTouchHelper = ItemTouchHelper(simpleItemTouchCallback)
        itemTouchHelper.attachToRecyclerView(recyclerView)
    }

}
