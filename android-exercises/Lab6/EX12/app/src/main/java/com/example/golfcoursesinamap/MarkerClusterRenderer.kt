package com.example.golfcoursesinamap

import android.content.Context
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.model.BitmapDescriptorFactory
import com.google.android.gms.maps.model.Marker
import com.google.android.gms.maps.model.MarkerOptions
import com.google.maps.android.clustering.ClusterManager
import com.google.maps.android.clustering.view.DefaultClusterRenderer
import com.google.maps.android.collections.MarkerManager

class MarkerClusterRenderer(context: Context, map: GoogleMap, clusterManager: ClusterManager<GolfCourseItem>) : DefaultClusterRenderer<GolfCourseItem>(context, map, clusterManager) {
    override fun onBeforeClusterItemRendered(item: GolfCourseItem, markerOptions: MarkerOptions) {
        super.onBeforeClusterItemRendered(item, markerOptions)

        // Set cluster item marker color
        markerOptions.icon(BitmapDescriptorFactory.defaultMarker(item.getColor()))
    }

    override fun onClusterItemRendered(clusterItem: GolfCourseItem, marker: Marker) {
        super.onClusterItemRendered(clusterItem, marker)

        // Set marker tag
        marker.tag = clusterItem.getTag()
    }
}