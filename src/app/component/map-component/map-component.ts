import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

interface Local {
  nome: string;
  tipo: 'parque' | 'praca';
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-map-component',
  standalone: false,
  templateUrl: './map-component.html',
  styleUrl: './map-component.css'
})
export class MapComponent implements AfterViewInit {

  private map!: L.Map;

  locais: Local[] = [
    { nome: 'Parque CERET', tipo: 'parque', latitude: -23.561302, longitude: -46.563374 },
    { nome: 'Parque do Piqueri', tipo: 'parque', latitude: -23.540948, longitude: -46.591976 },
    { nome: 'Praça Silvio Romero', tipo: 'praca', latitude: -23.544612, longitude: -46.574690 },
    { nome: 'Praça Domingos Jorge Velho', tipo: 'praca', latitude: -23.542530, longitude: -46.574658 },
    { nome: 'Praça Rotary', tipo: 'praca', latitude: -23.544996, longitude: -46.566295 },
    { nome: 'Praça Padre Damião', tipo: 'praca', latitude: -23.545889, longitude: -46.573238 },
    { nome: 'Praça Sampaio Vidal', tipo: 'praca', latitude: -23.546159, longitude: -46.577674 },
    { nome: 'Praça Ituzaingó', tipo: 'praca', latitude: -23.538759, longitude: -46.583357 }
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-23.5447, -46.5746],
      zoom: 14,
      zoomControl: false,           // desativa os botões de zoom
      dragging: false,              // bloqueia o movimento do mapa
      scrollWheelZoom: false,       // bloqueia zoom com a roda do mouse
      doubleClickZoom: false,       // bloqueia zoom com clique duplo
      boxZoom: false,               // bloqueia zoom por seleção de área
      keyboard: false,              // bloqueia controle via teclado
      touchZoom: false              // bloqueia zoom por pinça (mobile)
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://carto.com/">Carto</a> contributors',
      subdomains: 'abcd',
    }).addTo(this.map);
    
  }

  private addMarkers(): void {
    this.locais.forEach(local => {
      const cor = local.tipo === 'parque' ? 'green' : 'blue';

      const icon = L.icon({
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${cor}.png`,
        iconSize: [21, 34],
        iconAnchor: [10, 34],
        popupAnchor: [0, -28]
      });

      const marker = L.marker([local.latitude, local.longitude], { icon }).addTo(this.map);
      marker.bindPopup(`<strong>${local.nome}</strong><br>${local.tipo === 'parque' ? '🟢 Parque' : '🔵 Praça'}`);
    });
  }
}
