# Plantation Data Visualization WebGIS

Web Visualization Data perkebunan di indonesia. Data perkebunan di ambil dari berbagai sumber informasi yang berada di internet, dan dikemas menjadi 1 data. Menggunakan google-maps sebagai base map.

![Desain](https://github.com/movinoary/map-plantation-data/blob/master/src/assets/desain.png?raw=true)

Data yang terdapat antara lain

- Data Tanaman Cengkeh
- Data Tanaman Tembakau
- Data Tanaman Tebu
- Data Tanaman Teh
- Data Tanaman Kelapa Sawit

### Clone Repository

```bash
  git clone "https://github.com/movinoary/map-plantation-data"
```

Masuk ke directory projek

```bash
  cd map-plantation-data
```

Instal package

```bash
  npm install
```

jalankan react

```bash
  npm run dev
```

### Package

- [react](https://react.dev/)
- [react-google-maps](https://www.npmjs.com/package/@react-google-maps/api)

### File

| File              | Description                                            |
| :---------------- | :----------------------------------------------------- |
| `index.js`        | merender awal untuk framework reactjs                  |
| `index.css`       | kumpulan css yang digunakan                            |
| `App.js`          | rendering map, konfigurasi data, dan konfidurasi popup |
| `informasi.js`    | Data type perkebunan                                   |
| `perkebunan.json` | file geojson data perkebunan                           |
