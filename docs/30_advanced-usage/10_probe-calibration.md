---
sidebar_position: 10
description: Apply a look-up table based probe calibration.
---

# Probe Calibration

:::info Work-in-progress
This page is still **work-in-progress**. Please check back later for more details on probe calibration.
:::

As volumetric soil water content depends on the type of soil as well as the soils porosity, Sensus comes, by default, with a very simple calibration which should be good enough for most cases where precise measurement of water content is not needed.
However, one can calibrate the Soil Probe by mapping the raw values measured by the probe to a known water percentage using the Lookup table found in the [default_config.toml](https://github.com/Ardelean-Calin/sensus-cli/blob/main/default_config.toml).

To calibrate via LUT, you will need the raw values returned by the Soil Probe. These raw values can only be obtained via the [CLI's logging functionality](00_data-logging.md).