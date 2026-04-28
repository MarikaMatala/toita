package com.example.roomshoppinglist

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query

@Dao
interface ShoppingListDao {

    @Query("SELECT * from shopping_list_table")
    fun getAll(): MutableList<ShoppingListItem>

    @Insert
    fun insert(item: ShoppingListItem) : Long

    @Query("DELETE FROM shopping_list_table WHERE id = :itemId")
    fun delete(itemId: Int)

}