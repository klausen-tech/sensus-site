---
sidebar_position: 20
---

# Configuring Sensus

Using the CLI, you can alter some of Sensus's default behavior. There is a demo configuration.toml file found on the official Github Repository.

The demo configuration should be self-explanatory, however here's a table describing each configurable parameter:

| Parameter | Description | Accepted values  |
|---|--|--|
| Name | Changing this name will change the BLE Advertisment Local Name. Useful if you have multiple Sensuses and want to identify each in Homeassistant. | Any ASCII string up to 29 characters long. |
| Onboard Sample Time | By default, Sensus samples the onboard sensors every 30 seconds if on battery or every 10 seconds if plugged in. <br/> <br/>**Raising or lowering this value affects battery life.** | Any time string: `10s, 1m10s, 1h, 2h30m`, etc.<br/><br/>Minimum sample time is 1s<br/>Maximum sample time is 4294967s (~7 weeks) |
| Probe Sample Time | By default, Sensus samples the soil probe (if present) every 30 seconds if on battery or every 10 seconds if plugged in. <br/> <br/>**Raising or lowering this value affects battery life.** | Any time string: `10s, 1m10s, 1h, 2h30m`, etc.<br/><br/>Minimum sample time is 1s<br/>Maximum sample time is 4294967s (~7 weeks) |
| Probe Calibration | 10-point look-up table that can be used to calibrate probe measurements | Each point is a key, value pair of: <br/>- Frequency: Percentage<br/><br/>Frequency is a value from 0 to 1800000 Hz while percentage a value from 0 to 100% |

## Read and write the configuration to Sensus

After you adapted the default_config.toml file to suit your desired application, you can program Sensus with the given configuration by connecting it via USB and running:

`sensus config-set --port <your_port> --config <your_config.toml>`

A similar command can be used to read the current configuration:

`sensus config-get --port <your_port> > output.toml`

For more information, see `sensus config-set --help` and `sensus config-get --help`.

![Sample config flow](./img/configuring.gif)