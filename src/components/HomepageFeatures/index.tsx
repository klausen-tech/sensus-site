import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plug-and-play 🎮',
    description: (
      <>
        <strong>Sensus</strong> was designed with Homeassistant in mind. Just power it up and it should appear as a new integration.
        Of course, you can also use it without Homeassistant.
      </>
    ),
  },
  {
    title: 'Packed full with sensors 👃',
    description: (
      <>
        A variety of sensors are present: Temperature🌡️, Relative Air Humidity💧, Illuminance⛅, Supply Voltage⚡, as well as Soil Moisture and Soil Temperature.
        And more can be added via the <strong>expansion interface</strong>.
      </>
    ),
  },
  {
    title: 'Low power 🔋',
    description: (
      <>
        Sensus can run for <strong>up to 1 year</strong> when powered from a inexpensive CR2032 battery (included) or indefinitely when powered via <strong>USB-C</strong>.
      </>
    ),
  },
  {
    title: 'Bluetooth Low-Energy 📡',
    description: (
      <>
        Data is transmitted wirelessly via Bluetooth Low-Energy, so you don't need expensive Zigbee Hubs.
        The transmission range is <strong>up to 100m</strong>.
      </>
    ),
  },
  {
    title: 'Capacitive Soil Probe 🌱',
    description: (
      <>
        <strong>Replaceable</strong> soil probe measures how wet the soil is using a capacitive method. Also provides soil temperature🌡️ so you know just how cold it is at the plant's roots.
      </>
    ),
  },
  {
    title: 'Upgradeable and configurable 🧰',
    description: (
      <>
        Sensus can be updated using <a href='https://github.com/Ardelean-Calin/sensus-cli' target='_blank'>sensus-cli</a>.
        This application can also be used to configure the device, as well as calibrate the Soil Probe.
      </>
    ),
  },
  {
    title: 'USB-C 🔌',
    description: (
      <>
        Can't believe this is a <i>feature</i> in ${new Date().getFullYear()} . Used for logging additional data from Sensus, as well as updating and configuring Sensus.
      </>
    ),
  },
  {
    title: 'Expandable 🧩',
    description: (
      <>
        The Soil Probe is just one of many planned addons for Sensus. For example, I plan to support the Adafruit STEMMA Soil Sensor, as well.
        Other addons are in the works!
      </>
    ),
  },
  {
    title: 'Made in the EU 🇪🇺',
    description: (
      <>
        Sensus is made in <strong>Cluj-Napoca</strong>, the informal capital of Transylvania, in a one-bedroom apartment.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className='text--center'>Features</h1>
        <br/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
