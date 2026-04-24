export function generateList(
  days: number,
  climate: string,
  activity: string,
  transport: string
) {
  let list: string[] = [];

  let socks = days + 1;
  let underwear = days + 1;
  let shirts = days;

  if (days > 5) {
    shirts = days - 1;
  }

  list.push(`${socks}x Socken`);
  list.push(`${underwear}x Unterwäsche`);
  list.push(`${shirts}x T-Shirts`);

  if (climate === "Heiss / Tropisch") {
    list.push("Sonnencreme");
    list.push("Sonnenbrille");
    list.push("Badehose / Bikini");
    list.push("Flip-Flops");
  }

  if (climate === "Mild") {
    list.push("Leichte Jacke");
    list.push("Sneaker");
  }

  if (climate === "Kalt / Arktisch") {
    list.push("Thermowäsche");
    list.push("Kappe");
    list.push("Winterjacke");
    list.push("Handschuhe");
    list.push("Schal");
  }

  if (activity === "Strand / Baden") {
    list.push("Badetuch");
    list.push("Taucherbrille");
  }

  if (activity === "Wandern") {
    list.push("Wanderrucksack");
    list.push("Wanderschuhe");
    list.push("Rucksack");
    list.push("Trinkflasche");
  }

  if (activity === "Ausgang / Party") {
    list.push("Schöne Kleider");
    list.push("Parfüm");
  }

  if (activity === "Business") {
    list.push("Hemd / Bluse");
    list.push("Laptop");
    list.push("Ladekabel");
  }

  if (transport === "Flugzeug") {
    list.push("Pass");
    list.push("Handgepäck beachten");
    list.push("Boardingkarte");
  }

  if (transport === "Zug") {
    list.push("Ticket");
    list.push("Kopfhörer");
  }

  if (transport === "Auto") {
    list.push("Fahrausweis");
    list.push("Autoschlüssel");
    list.push("Auto-Tanken")
  }

  return list;
}