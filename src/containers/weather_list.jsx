import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart"
import GoogleMap from "../components/google_map"

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(w => w.main.temp);
        const humidities = cityData.list.map(w => w.main.humidity);
        const pressures = cityData.list.map(w => w.main.pressure);
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/>
                </td>
                <td>
                    <Chart data={temps} units="K" color={"red"}/>
                </td>
                
                <td>
                    <Chart data={pressures} units="hPa" color={"green"}/>
                </td>

                <td>
                    <Chart data={humidities} color={"black"} units="%"/>
                </td>
                
            </tr>
        )
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList)