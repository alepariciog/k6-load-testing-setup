<h1 align="center">
  🌠 k6 local setup to perform load testing 🌠
</h1>

<p align="center">
  Dockerized setup with a preconfigured InfluxDB, Grafana and k6.
</p>

## 💡 Components

- InfluxDB: Dockerized time-series database.
- Grafana: Visualization tool that reads from the database. Custom data source and dashboard preconfigured.
- k6: Dockerized tool that runs an experiment through a command. If name change of the script desired, modify this command.
- Scripts: Experiments to be customized to the user's needs. I recommend consulting grafana k6 documentation to learn about the different types of load testing first.

<br/>

![status](https://img.shields.io/badge/status-up-brightgreen) ![](https://visitor-badge.lithub.cc/badge?page_id=github.com/alepariciog/k6-load-testing-setup)
