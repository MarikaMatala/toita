package com.example.golfcoursesinamap

import com.google.android.gms.maps.model.LatLng
import com.google.maps.android.clustering.ClusterItem

class GolfCourseItem(
    position: LatLng,
    title: String,
    color: Float,
    tag: List<String>
) : ClusterItem {

    private val position: LatLng
    private val title: String
    private val color: Float
    private val tag: List<String>

    override fun getPosition(): LatLng {
        return position
    }

    override fun getTitle(): String? {
        return title
    }

    override fun getSnippet(): String? {
        return ""
    }

    fun getTag(): List<String> {
        return tag
    }

    fun getColor(): Float {
        return color
    }

    init {
        this.position = position
        this.title = title
        this.color = color
        this.tag = tag
    }
}