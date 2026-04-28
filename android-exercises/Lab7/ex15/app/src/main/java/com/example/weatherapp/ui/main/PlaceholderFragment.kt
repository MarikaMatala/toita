package com.example.weatherapp.ui.main

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelProviders
import com.bumptech.glide.Glide
import com.example.weatherapp.Forecast
import com.example.weatherapp.MainActivity
import com.example.weatherapp.R
import com.example.weatherapp.databinding.FragmentMainBinding

/**
 * A placeholder fragment containing a simple view.
 */
class PlaceholderFragment : Fragment() {

    private lateinit var pageViewModel: PageViewModel
    private var _binding: FragmentMainBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        pageViewModel =
            ViewModelProviders.of(this).get(PageViewModel::class.java).apply {
                val position: Int = arguments!!.getInt(ARG_FORECAST_POSITION)
                setForecast(MainActivity.forecasts[position])
            }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // find layout
        val root = inflater.inflate(R.layout.fragment_main, container, false)
        // show data in UI
        pageViewModel.forecast.observe(this, Observer<Forecast> {
            val cityTextView = root.findViewById<TextView>(R.id.cityTextView)
            val conditionTextView = root.findViewById<TextView>(R.id.conditionTextView)
            val temperatureTextView = root.findViewById<TextView>(R.id.temperatureTextView)
            val timeTextView = root.findViewById<TextView>(R.id.timeTextView)
            val iconImageView = root.findViewById<ImageView>(R.id.iconImageView)
            cityTextView.text = it.city
            conditionTextView.text = it.condition
            temperatureTextView.text = it.temperature
            timeTextView.text = it.time
            Glide.with(this).load(it.icon).into(iconImageView)
        })
        return root
    }

    companion object {
        private const val ARG_FORECAST_POSITION = "forecast_position"

        @JvmStatic
        fun newInstance(position: Int): PlaceholderFragment {
            return PlaceholderFragment().apply {
                arguments = Bundle().apply {
                    putInt(ARG_FORECAST_POSITION, position)
                }
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}