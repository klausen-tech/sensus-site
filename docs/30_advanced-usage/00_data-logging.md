---
sidebar_position: 0
description: "Log raw data to a CSV file. Raw data includes more information than found in the BLE advertisment."
---

# Data Logging

The logging functionality can be used if one wants to gather sensor data without having a Homeassistant install. Currently logging is done via **USB-C**, but BLE is in the works.

Logging is also used to [**calibrate the soil probe**](/docs/30_advanced-usage/10_probe-calibration.md), as it is the only way to receive RAW probe measurement values.

To start a logging session, simply connect Sensus via USB-C and run:

`sensus log --port /dev/ttyUSB0 --every 1s --output-file out.csv`

| Argument | Required | Description | Example |
|----------|----------|-------------|---------|
| --port `port` | **True** | The port where Sensus is connected | `COM3`, `/dev/ttyACM0` |
| --every `timestring` | False | How often to retrieve data from Sensus. Not specifying means data is retrieved only once | `10s`, `1m30s`, `30m`, `1h` |
| --output-file `file` | False | CSV file where to store the measurements. Optionally, one can use STDOUT redirection instead of this option ( > outfile.csv ) | `data.csv` |

**For more information** you can consult the help page of the logging functionality:

`sensus log --help`