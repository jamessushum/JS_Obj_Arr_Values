// Dot notation exercise
const wardrobe = {
  height: 80,
  manufacturer: "Killbrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

console.log(`My height is: ${wardrobe.height}`);
console.log(`My favorite clothing manufacturer is: ${wardrobe.manufacturer}`);
console.log(`The following are the items currently in my closet: ${wardrobe.contents}`);
console.log(`My depth is: ${wardrobe.depth}`);
console.log(`My width is: ${wardrobe.width}`);

wardrobe.material = "Cedar";
console.log(wardrobe);

// Dot and square-bracket notation exercise
const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

console.log(`Dimensions of the Empire State Building are: Stories: ${empireStateBuilding.stories}, Height: ${empireStateBuilding.height}, SqFt: ${empireStateBuilding.squareFeet}, Length: ${empireStateBuilding.eastWestLength} x ${empireStateBuilding.northSouthLength}`);

const addressInput = "address";
const constructionDateInput = "constructionDate";
const costInput = "cost";
const architectInput = "architect";

console.log(`The Empire State Building Address is: ${empireStateBuilding[addressInput]}, it was constructed in ${empireStateBuilding[constructionDateInput]}, it is worth approximately: ${empireStateBuilding[costInput]}, the architects behind the masterpiece were ${empireStateBuilding[architectInput]}`);

// Arrays as values exercise
const nashvilleSoftwareSchool = {
  founded: 2012,
  director: "John Wark",
  instructors: {
    fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
    partTime: ["Zoe", "Nathan"]
  },
  address: "500 Interstate Blvd. S"
}

const fullTimeStaff = nashvilleSoftwareSchool.instructors.fullTime;
const partTimeStaff = nashvilleSoftwareSchool.instructors.partTime;

for (let i = 0; i < partTimeStaff.length; i++) {
  console.log(partTimeStaff[i])
}

for (let i = 0; i < fullTimeStaff.length; i++) {
  console.log(fullTimeStaff[i])
}

const andy = nashvilleSoftwareSchool.instructors.fullTime[4];
console.log(andy);

const zoe = nashvilleSoftwareSchool.instructors.partTime[0];
console.log(zoe);

// Accessing Property Values Practice
const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
      formed: 1960,
      disbanded: 1970
  },
  members: [
      {
          name: "George Harrison",
          birth: 1943,
          death: 2001
      },
      {
          name: "Paul McCartney",
          birth: 1942,
          death: null
      },
      {
          name: "John Lennon",
          birth: 1940,
          death: 1980
      },
      {
          name: "Ringo Starr",
          birth: 1940,
          death: null
      }
  ]
}

const paul = beatles.members[1].name;
const formed = beatles.history.formed; 
const disbanded = beatles.history.disbanded;
const birth = beatles.members[1].birth;
const album = beatles.albums[3];

console.log(`${paul} was in the Beatles from ${formed} to ${disbanded}. He was born in ${birth}. He contributed heavily to the ${album} Album.`)
