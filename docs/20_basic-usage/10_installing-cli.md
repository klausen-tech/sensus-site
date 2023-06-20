---
title: Installing sensus-cli
sidebar_position: 10
---

## What is sensus-cli?

The command-line program can be used to update and configure your Sensus.
It can also be used for more advanced stuff, such as data logging from your Sensus with variable data collection rate, for calibrating the soil probe using a look-up table and for force-updating the device.
For now, the CLI needs Sensus to be connected via USB-C, however work is in-progress to support a BLE connection, as well.

## Installing the CLI - recommended way
The command line program can be found on this Github page: https://github.com/Ardelean-Calin/sensus-cli

**Requirements**:
- Python 3.10 or later
- pip 22.0.0 or later

Simply open a terminal and run:

`pip3 install git+https://github.com/Ardelean-Calin/sensus-cli.git`

Then run `sensus --help` to verify that the CLI installed correctly.


## Alternative install method

Alternatively, you can download a compiled 64-bit executable for Windows and Linux on the [**Latest Releases**](https://github.com/Ardelean-Calin/sensus-cli/releases/latest) page.

If you are on Linux, you need to make the downloaded program executable, as well:

`chmod +x sensus-cli-linux_x86_64`

Then you can invoke the CLI by running

`./sensus-cli-linux_x86_64 --help` to verify that all works correctly.


**In case of Issues, please don't hesitate to [submit an Issue](https://github.com/Ardelean-Calin/sensus-cli/issues/new/choose) on Github.**