window.Webflow ||= [];
window.Webflow.push(() => {
  const mapElement = document.querySelector<HTMLElement>('[tq-element="map"]');
  if (!mapElement) {
    return;
  }
  //Map
  const map = new window.google.maps.Map(mapElement, {
    zoom: 15,
    center: { lat: 40.71328263476621, lng: -73.95806496031473 },
  });

  new google.maps.Marker({
    position: { lat: 40.71328263476621, lng: -73.95806496031473 },
    map: map,
  });

  const formEl = document.querySelector<HTMLFormElement>('[tq-element="form"]');
  formEl?.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  const locationText = document.querySelector<HTMLElement>('[tq-element="text-style"]');
  if (!locationText) return;
  const locationSelect = document.querySelector<HTMLSelectElement>('[tq-element="select"]');
  if (!locationSelect) return;
  //function to center map and add marker
  const centerMap = function (lat: number, lng: number) {
    map.setCenter({ lat: lat, lng: lng });
    new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
    });
  };
  //Function handling UI Map details
  //rendering different maps based on user input
  const locationWrapper = document.querySelector<HTMLElement>('[tq-element="location-wrapper"]');
  if (!locationWrapper) return;

  const updateUi = function (
    address: string,
    phoneNumber: number,
    Sun: string,
    Mon: string,
    Tue: string,
    Wed: string,
    Thu: string,
    Fri: string,
    Mot: string
  ) {
    locationText.textContent = `${address}`;
    locationWrapper.innerHTML = `
  <div tq-element="location-wrapper" class="location-content-wrapper">
  <div class="location-wrapper">
  <div class="text-grey-color-125rem fullwidth">Address:</div>
  <div>${address}</div></div>
  <div class="location-wrapper"><div>Contact:</div>
  <a href="tel:${phoneNumber}" class="contact-link">${phoneNumber}</a></div>
  <div class="location-wrapper">
  <div class="text-grey-color-125rem fullwidth">Hours:</div>
  <div>Sun: ${Sun} </div>
  <div>Mon: ${Mon} </div>
  <div>Tue: ${Tue} </div>
  <div>Wed: ${Wed} </div>
  <div>Thu: ${Thu} </div>
  <div>Fri: ${Fri}</div>
  <div>Motzei - Shabbos: ${Mot}</div>
  </div>
  </div>`;
  };
  //// Setting map based on User Location.
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude: lat } = position.coords;

      if (lat > 33.4) {
        // Arizona
        centerMap(33.5305144, -112.0632397);
        updateUi(
          '745 E Maryland Ave. Phoenix AZ 85014',
          6029220350,
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'By Appointment'
        );
      }

      if (lat > 51.2) {
        // belgium
        centerMap(51.21141368629715, 4.4136375873075755);
        updateUi(
          '53 Isabellalei 2018 Antwerpen Belgium',
          +3235008347,
          '12:00 PM - 01:00 PM and 08:00 PM - 09:00 PM',
          '10:00 PM - 11:00 PM',
          '07:30 PM - 08:30 PM',
          '09:00 PM - 10:00 PM',
          '10:15 PM - 11:15 PM',
          'Closed',
          'Closed'
        );
      }

      if (lat > 51.5) {
        // Uk location
        centerMap(51.5773316, -0.2046833);
        updateUi(
          '2 Garrick Ave, London NW11 9AS, UK',
          2071124848,
          '10:30 AM - 01:00 PM',
          '10:30 AM - 01:00 PM',
          '10:30 AM - 01:00 PM',
          '10:30 AM - 01:00 PM',
          '10:30 AM - 01:00 PM',
          '10:30 AM - 12:00 PM',
          'Closed'
        );
      }
      if (lat > 31.6) {
        //Israel
        centerMap(31.7116655, 34.994776);
        updateUi(
          '10 Nachal Revivim Street, Beit Shemesh, israel',
          779710000,
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'By Appointment',
          'Closed',
          'Closed',
          'Closed'
        );
      }
    },
    function () {
      centerMap(0, 0);
    }
  );
  //Event Change on Select Menu
  locationSelect.addEventListener('change', function () {
    if (locationSelect.value === '1') {
      // centerMap(33.536613630737904, 33.536613630737904);
      centerMap(33.5305144, -112.0632397);
      updateUi(
        '745 E Maryland Ave. Phoenix AZ 85014',
        6029220350,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment'
      );
    }

    if (locationSelect.value === '2') {
      //51.21141368629715, 4.4136375873075755
      centerMap(51.21141368629715, 4.4136375873075755);
      updateUi(
        '53 Isabellalei 2018 Antwerpen Belgium',
        +3235008347,
        '12:00 PM - 01:00 PM and 08:00 PM - 09:00 PM',
        '10:00 PM - 11:00 PM',
        '07:30 PM - 08:30 PM',
        '09:00 PM - 10:00 PM',
        '10:15 PM - 11:15 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '3') {
      centerMap(33.8276465, -84.3372609);
      updateUi(
        '1855 Lavista Rd. Atlanta, GA 30329',
        6782354644,
        'By Appointment',
        'Closed',
        'Closed',
        'By Appointment',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '4') {
      centerMap(40.6328741, -73.9955139);
      updateUi(
        '5316 New Utrecht Ave, Brooklyn NY 11219',
        7182255824,
        '11:00 AM - 06:00 PM',
        '11:00 AM - 05:00 PM and 08:00 PM - 10:00 PM',
        '11:00 AM - 05:00 PM and 08:00 PM - 10:00 PM',
        '11:00 AM - 05:00 PM and 08:00 PM - 10:00 PM',
        '11:00 AM - 05:00 PM and 08:00 PM - 10:00 PM',
        '10:00 AM - 12:00 PM',
        'Closed'
      );
    }

    if (locationSelect.value === '5') {
      centerMap(42.3464287, -71.1530001);
      updateUi(
        '56 Chestnut Hill Ave. Suite 303 Brighton, MA 02135',
        6173449650,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'By Appointment',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '6') {
      centerMap(40.1068829, -74.2220492);
      updateUi(
        '500 West Kennedy Blvd, NJ',
        7327301824,
        '08:30 AM - 06:00 PM',
        '08:30 AM - 06:00 PM',
        '08:30 AM - 06:00 PM',
        '08:30 AM - 06:00 PM',
        '08:30 AM - 06:00 PM',
        'By Appointment',
        '08:30 AM - 06:00 PM'
      );
    }

    if (locationSelect.value === '7') {
      centerMap(51.5313156, 0.5856773);
      updateUi(
        'Meppel Avenue, Canvey Island, SS8 9RZ',
        7771333274,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '8') {
      centerMap(0, 0);
      updateUi(
        '2939 W Touhy Ave',
        8722729824,
        '11:00 AM - 01:00 PM',
        '01:30 PM - 05:30 PM',
        '01:30 PM - 05:30 PM',
        '01:30 PM - 04:30 PM',
        '01:30 PM - 05:30 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '9') {
      centerMap(41.499278, -81.5190918);
      updateUi(
        '2200 S. Green Rd., Ste. 102, University Heights, OH 44121',
        2162208242,
        '01:00 PM - 03:00 PM',
        'Closed',
        'Closed',
        '05:30 PM - 07:30 PM',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '10') {
      //Detroit
      centerMap(42.4728043, -83.229228);
      updateUi(
        '18877 W.10 Mile Suite 105 Southfield, MI 48075',
        2482152902,
        '02:00 PM - 04:00 PM',
        'By Appointment',
        'By Appointment',
        '07:00 PM - 09:00 PM',
        'By Appointment',
        'By Appointment',
        'Closed'
      );
    }

    if (locationSelect.value === '11') {
      //Edgware
      centerMap(51.6215344, -0.275341);
      updateUi(
        '84 Mowbray Parade, Edgware HA8 8JS',
        2089525666,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment'
      );
    }

    if (locationSelect.value === '12') {
      //Highland Park
      centerMap(40.5057206, -74.4162421);
      updateUi(
        '1177 Raritan Ave, Highland Park NJ 08904',
        7327301824,
        'Closed',
        'Closed',
        '08:00 PM - 10:00 PM',
        'Closed',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '13') {
      //Far Rockaway
      centerMap(40.6065258, -73.7441165);
      updateUi(
        '728 Empire Ave, Far Rockaway, NY 11691',
        5162471907,
        '02:00 PM - 04:00 PM',
        '02:00 PM - 04:00 PM',
        '02:00 PM - 04:00 PM',
        'By Appointment',
        '02:00 PM - 04:00 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '14') {
      //Gateshead
      centerMap(54.9541985, -1.6082743);
      updateUi(
        'Bewick Rd, Bensham, Gateshead NE8 1UA, United Kingdom',
        1915946616,
        'Closed',
        '08:00 PM - 09:00 PM',
        '08:00 PM - 09:00 PM',
        '08:00 PM - 09:00 PM',
        '08:00 PM - 09:00 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '15') {
      //Golders Green
      centerMap(51.5773316, -0.2046833);
      updateUi(
        '2 Garrick Ave, London NW11 9AS, UK',
        2071124848,
        '10:30 AM - 01:00 PM',
        '10:30 AM - 01:00 PM',
        '10:30 AM - 01:00 PM',
        '10:30 AM - 01:00 PM',
        '10:30 AM - 01:00 PM',
        '10:30 AM - 12:00 PM',
        'Closed'
      );
    }

    if (locationSelect.value === '16') {
      //Houston
      centerMap(29.650904, -95.5157647);
      updateUi(
        '7823 Ludington Dr, Houston, TX 77071',
        8322813750,
        '07:00 PM - 09:00 PM',
        'Closed',
        'Closed',
        '07:00 PM - 09:00 PM',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '17') {
      //Beit Shemesh
      centerMap(31.7116655, 34.994776);
      updateUi(
        '10 Nachal Revivim Street, Beit Shemesh, israel',
        779710000,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '18') {
      //Yerushalaim(Ramat Eshkol)
      centerMap(31.8025097, 35.2213133);
      updateUi(
        'Ramat HaGolan St 25, Jerusalem',
        779710000,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '19') {
      //Yerushalaim(Romema)
      centerMap(31.7916148, 35.2098239);
      updateUi(
        '3 Luis Brandeis Street, Romema, Israel',
        779710000,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '20') {
      //Jersey Shore
      centerMap(40.2920663, -74.0272057);
      updateUi(
        '211 Monmouth Rd, West Long Branch, NJ 07764, USA',
        7325387350,
        'By Appointment',
        'Closed',
        'Closed',
        'Closed',
        'By Appointment',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '21') {
      //Los angeles
      centerMap(0, 0);
      updateUi(
        '332 N La Brea Ave. Los Angeles CA 90036',
        3232383601,
        '08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '22') {
      //Manchester
      centerMap(53.5071168, -2.253496);
      updateUi(
        '82a Leicester Road Salford M7 4AR',
        1619257555,
        '01:30 PM - 05:00 PM and 08:00 PM - 09:00 PM',
        '01:30 PM - 05:00 PM and 08:00 PM - 09:00 PM',
        '01:30 PM - 05:00 PM and 08:00 PM - 09:00 PM',
        '01:30 PM - 05:00 PM and 08:00 PM - 09:00 PM',
        '01:30 PM - 05:00 PM and 08:00 PM - 09:00 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '23') {
      //Mexico
      centerMap(19.4364764, -99.2048389);
      updateUi(
        'Homero 1507, Polanco',
        5551553529,
        'Closed',
        '09:00 AM - 07:00 PM',
        '09:00 AM - 07:00 PM',
        '09:00 AM - 07:00 PM',
        '09:00 AM - 07:00 PM',
        '09:00 AM - 04:00 PM',
        'Closed'
      );
    }
    if (locationSelect.value === '24') {
      //Minneapolis
      centerMap(44.9489889, -93.3329497);
      updateUi(
        '2930 Inglewood Ave Minneapolis MN 55416',
        7328333115,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment'
      );
    }

    if (locationSelect.value === '25') {
      //passaic-clifton
      centerMap(40.8429854, -74.1300254);
      updateUi(
        '100 Main Ave Passaic NJ 07055',
        9736585624,
        '10:00 AM - 11:30 AM And 08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        'Closed',
        '08:00 PM - 09:30 PM',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '26') {
      //Philadelphia
      centerMap(40.0116158, -75.2599349);
      updateUi(
        '911 Montgomery Avenue, Penn Valley PA 19072',
        6104702350,
        '05:30 PM - 07:30 PM',
        '06:30 PM - 08:30 PM',
        '06:30 PM - 08:30 PM',
        'Closed',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '27') {
      //Rockland
      centerMap(41.1070945, -74.0609511);
      updateUi(
        'Atrium Plaza, 401 Route 59, Monsey, NY 10952',
        8453711824,
        '10:00 AM - 06:00 PM',
        '10:30 AM - 05:15 PM',
        '10:30 AM - 05:15 PM and 08:00 PM - 10:00 PM',
        '10:30 AM - 05:15 PM',
        '05:15 PM And 08:00 PM - 10:00 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '28') {
      //Scranton
      centerMap(41.4105175, -75.6531591);
      updateUi(
        '600 Monroe Ave.Scranton PA 18510',
        5702763890,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '29') {
      //South Florida
      centerMap(25.9341201, -80.1808769);
      updateUi(
        '172-60 NE 10th Ave., North Miami Beach, FL 33162',
        5616144686,
        'Closed',
        'Closed',
        'By Appointment',
        'Closed',
        '08:00 PM - 10:00 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '30') {
      //Stamford Hill
      centerMap(0, 0);
      updateUi(
        '78 Cazenove Road N16 6AA',
        2034755454,
        '03:30 PM - 05:30 PM and 08:30 PM - 10:00 PM',
        '08:30 PM - 10:00 PM',
        '08:30 PM - 10:00 PM',
        '08:30 PM - 10:00 PM',
        '08:00 PM - 10:00 PM',
        'Closed',
        '08:30 PM - 10:00 PM'
      );
    }

    if (locationSelect.value === '31') {
      //Stl Tag Office
      centerMap(38.6403107, -90.5711889);
      updateUi(
        '1809 Clarkson Road',
        3143430150,
        'By Appointment',
        'Closed',
        'Closed',
        'Closed',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '32') {
      //Basel Switzerland
      centerMap(47.5622531, 7.5726863);
      updateUi(
        'Burgfelderstrasse 11, 4055 Basel, Switzerland',
        41765836547,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment'
      );
    }

    if (locationSelect.value === '33') {
      //tag Montreal
      centerMap(0, 0);
      updateUi(
        '2165 Barclay, Basement Entrance',
        5148190844,
        '08:00 PM - 09:30 PM',
        '08:00 PM - 09:30 PM',
        'Closed',
        '08:00 PM - 09:30 PM',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '34') {
      //Toronto
      centerMap(43.7180969, -79.4282162);
      updateUi(
        '182 Caribou Rd, North York, ON M5N 2B6, Canada',
        6479468455,
        'By Appointment',
        '02:30 PM - 04:00 PM',
        '02:30 PM - 04:00 PM',
        '04:00 PM and 09:30 PM - 10:30 PM',
        'Closed',
        'Closed',
        '09:30 PM - 10:30 PM'
      );
    }

    if (locationSelect.value === '35') {
      //Vienna
      centerMap(0, 0);
      updateUi(
        'Lilienbrunngasse 17, 1020 Wien',
        4319972926,
        '04:00 PM - 07:00 PM',
        'Closed',
        '04:00 PM - 07:00 PM',
        'Closed',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '36') {
      //Waterbury
      centerMap(0, 0);
      updateUi(
        '135 Roseland Ave. Lower Level, Waterbury, CT 06710, USA',
        2037598551,
        '07:30 PM - 09:00 PM',
        'Closed',
        'Closed',
        '07:30 PM - 09:00 PM',
        'Closed',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '37') {
      //Williamsburg
      centerMap(40.7026285, -73.9567775);
      updateUi(
        '170 Lee Ave Brooklyn NY 11211',
        7184371824,
        '11:30 AM - 05:30 PM',
        '11:00 AM - 05:00 PM And 08:30 PM - 10:30 PM',
        '11:00 AM - 05:00 PM And 08:30 PM - 10:30 PM',
        '11:00 AM - 05:00 PM And 08:30 PM - 10:30 PM',
        '11:00 AM - 05:00 PM And 08:30 PM - 10:30 PM',
        'Closed',
        'Closed'
      );
    }

    if (locationSelect.value === '38') {
      //Yu
      centerMap(40.8519989, -73.9294584);
      updateUi(
        '515 W 185th St, New York, NY 10033',
        3128909777,
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment',
        'By Appointment'
      );
    }
  });
});
