'use strict';

angular.module('sbAdminApp').controller('MapTubeCtrl', mapTubeCtrl);

function mapTubeCtrl() {
    var vm = this;
	this.categories = arrCategories;
}

var arrPhysicalData = {
	title: "Physical data",
	subcats: [
		{
			title: "Oceanography",
			description: "Land and Ocean",
		},
		{
			title: "Meteorology",
			description: "Weather and Climate",
		},
		{
			title: "Hydrology",
			description: "",
		},
		{
			title: "Geology",
			description: "",
		},
		{
			title: "Geomorphology",
			description: "",
		},
		{
			title: "Land",
			description: "",
		},
		{
			title: "Landscape forms",
			description: "",
		},
		{
			title: "Topography",
			description: "",
		},
		{
			title: "Hazards",
			description: "",
		},
		{
			title: "Ecology",
			description: "",
		},
		{
			title: "Flora",
			description: "",
		},
		{
			title: "Fauna",
			description: "",
		},
	],
};
	
var arrHumanData = {
	title: "Human data",
	subcats: [
		{
			title: "Population",
			description: "",
		},
		{
			title: "Society",
			description: "",
		},
		{
			title: "Health",
			description: "",
		},
		{
			title: "Religion",
			description: "",
		},
		{
			title: "History",
			description: "",
		},
		{
			title: "Academy",
			description: "",
		},
		{
			title: "Education",
			description: "",
		},
		{
			title: "Science",
			description: "",
		},
		{
			title: "Music",
			description: "",
		},
		{
			title: "Sports",
			description: "",
		},
		{
			title: "Finance",
			description: "",
		},
		{
			title: "Banking",
			description: "",
		},
		{
			title: "Trade",
			description: "",
		},
		{
			title: "Business",
			description: "",
		},
		{
			title: "Markets",
			description: "",
		},
		{
			title: "Companies",
			description: "",
		},
		{
			title: "Government",
			description: "",
		},
		{
			title: "Law",
			description: "Law and order",
		},
		{
			title: "Administration",
			description: "",
		},
		{
			title: "Human Rights",
			description: "",
		},
		{
			title: "Milsec",
			description: "Military and security",
		},
		{
			title: "Globalisation",
			description: "",
		},
		{
			title: "Agriculture",
			description: "",
		},
		{
			title: "Food",
			description: "",
		},
		{
			title: "Energy",
			description: "",
		},
		{
			title: "Resources",
			description: "",
		},
		{
			title: "Oil",
			description: "",
		},
		{
			title: "Fuel",
			description: "",
		},
		{
			title: "Gas",
			description: "",
		},
		{
			title: "Electricity",
			description: "",
		},
		{
			title: "Nuclear",
			description: "",
		},
		{
			title: "Technology",
			description: "",
		},
		{
			title: "Industry",
			description: "",
		},
		{
			title: "Transportation",
			description: "",
		},
		{
			title: "Aviation",
			description: "",
		},
		{
			title: "Maritime",
			description: "",
		},
		{
			title: "Tourist",
			description: "",
		},
		{
			title: "Logistics",
			description: "",
		},
		{
			title: "Bridges",
			description: "",
		},
		{
			title: "Tunnels",
			description: "",
		},
		{
			title: "Dams",
			description: "",
		},
		{
			title: "Structures",
			description: "",
		},
		{
			title: "Archeology",
			description: "",
		}
	],
};

var arrCountry = {
	title: "Country",
	subcats: [
	{
		 title: "Albania",
	},
	{
		 title: "Algeria",
	},
	{
		 title: "Andorra",
	},
	{
		 title: "Angola",
	},
	{
		 title: "Antigua and Barbuda",
	},
	{
		 title: "Argentina",
	},
	{
		 title: "Armenia",
	},
	{
		 title: "Aruba",
	},
	{
		 title: "Australia",
	},
	{
		 title: "Austria",
	},
	{
		 title: "Azerbaijan",
	},
	{
		 title: "Bahamas, The",
	},
	{
		 title: "Bahrain",
	},
	{
		 title: "Bangladesh",
	},
	{
		 title: "Barbados",
	},
	{
		 title: "Belarus",
	},
	{
		 title: "Belgium",
	},
	{
		 title: "Belize",
	},
	{
		 title: "Benin",
	},
	{
		 title: "Bermuda",
	},
	{
		 title: "Bhutan",
	},
	{
		 title: "Bolivia",
	},
	{
		 title: "Bosnia and Herzegovina",
	},
	{
		 title: "Botswana",
	},
	{
		 title: "Brazil",
	},
	{
		 title: "Brunei",
	},
	{
		 title: "Bulgaria",
	},
	{
		 title: "Burkina Faso",
	},
	{
		 title: "Burma",
	},
	{
		 title: "Burundi",
	},
	{
		 title: "Cabo Verde",
	},
	{
		 title: "Cambodia",
	},
	{
		 title: "Cameroon",
	},
	{
		 title: "Canada",
	},
	{
		 title: "Cayman Islands",
	},
	{
		 title: "Central African Republic",
	},
	{
		 title: "Chad",
	},
	{
		 title: "Chile",
	},
	{
		 title: "China",
	},
	{
		 title: "Colombia",
	},
	{
		 title: "Comoros",
	},
	{
		 title: "Congo, Democratic Republic of the",
	},
	{
		 title: "Congo, Republic of the",
	},
	{
		 title: "Costa Rica",
	},
	{
		 title: "Cote d"Ivoire",
	},
	{
		 title: "Croatia",
	},
	{
		 title: "Cuba",
	},
	{
		 title: "Curacao",
	},
	{
		 title: "Cyprus",
	},
	{
		 title: "Czech Republic",
	},
	{
		 title: "Denmark",
	},
	{
		 title: "Djibouti",
	},
	{
		 title: "Dominica",
	},
	{
		 title: "Dominican Republic",
	},
	{
		 title: "Ecuador",
	},
	{
		 title: "Egypt",
	},
	{
		 title: "El Salvador",
	},
	{
		 title: "Equatorial Guinea",
	},
	{
		 title: "Eritrea",
	},
	{
		 title: "Estonia",
	},
	{
		 title: "Ethiopia",
	},
	{
		 title: "Fiji",
	},
	{
		 title: "Finland",
	},
	{
		 title: "France",
	},
	{
		 title: "Gabon",
	},
	{
		 title: "Gambia, The",
	},
	{
		 title: "Georgia",
	},
	{
		 title: "Germany",
	},
	{
		 title: "Ghana",
	},
	{
		 title: "Greece",
	},
	{
		 title: "Grenada",
	},
	{
		 title: "Guatemala",
	},
	{
		 title: "Guinea",
	},
	{
		 title: "Guinea-Bissau",
	},
	{
		 title: "Guyana",
	},
	{
		 title: "Haiti",
	},
	{
		 title: "Holy See",
	},
	{
		 title: "Honduras",
	},
	{
		 title: "Hong Kong",
	},
	{
		 title: "Hungary",
	},
	{
		 title: "Iceland",
	},
	{
		 title: "India",
	},
	{
		 title: "Indonesia",
	},
	{
		 title: "Iran",
	},
	{
		 title: "Iraq",
	},
	{
		 title: "Ireland",
	},
	{
		 title: "Israel",
	},
	{
		 title: "Italy",
	},
	{
		 title: "Jamaica",
	},
	{
		 title: "Japan",
	},
	{
		 title: "Jordan",
	},
	{
		 title: "Kazakhstan",
	},
	{
		 title: "Kenya",
	},
	{
		 title: "Kiribati",
	},
	{
		 title: "Kosovo",
	},
	{
		 title: "Kuwait",
	},
	{
		 title: "Kyrgyzstan",
	},
	{
		 title: "Laos",
	},
	{
		 title: "Latvia",
	},
	{
		 title: "Lebanon",
	},
	{
		 title: "Lesotho",
	},
	{
		 title: "Liberia",
	},
	{
		 title: "Libya",
	},
	{
		 title: "Liechtenstein",
	},
	{
		 title: "Lithuania",
	},
	{
		 title: "Luxembourg",
	},
	{
		 title: "Macau",
	},
	{
		 title: "Macedonia",
	},
	{
		 title: "Madagascar",
	},
	{
		 title: "Malawi",
	},
	{
		 title: "Malaysia",
	},
	{
		 title: "Maldives",
	},
	{
		 title: "Mali",
	},
	{
		 title: "Malta",
	},
	{
		 title: "Marshall Islands",
	},
	{
		 title: "Mauritania",
	},
	{
		 title: "Mauritius",
	},
	{
		 title: "Mexico",
	},
	{
		 title: "Micronesia",
	},
	{
		 title: "Moldova",
	},
	{
		 title: "Monaco",
	},
	{
		 title: "Mongolia",
	},
	{
		 title: "Montenegro",
	},
	{
		 title: "Morocco",
	},
	{
		 title: "Mozambique",
	},
	{
		 title: "Namibia",
	},
	{
		 title: "Nauru",
	},
	{
		 title: "Nepal",
	},
	{
		 title: "Netherlands",
	},
	{
		 title: "Netherlands Antilles",
	},
	{
		 title: "New Zealand",
	},
	{
		 title: "Nicaragua",
	},
	{
		 title: "Niger",
	},
	{
		 title: "Nigeria",
	},
	{
		 title: "North Korea",
	},
	{
		 title: "Norway",
	},
	{
		 title: "Oman",
	},
	{
		 title: "Pakistan",
	},
	{
		 title: "Palau",
	},
	{
		 title: "Panama",
	},
	{
		 title: "Papua New Guinea",
	},
	{
		 title: "Paraguay",
	},
	{
		 title: "Peru",
	},
	{
		 title: "Philippines",
	},
	{
		 title: "Poland",
	},
	{
		 title: "Portugal",
	},
	{
		 title: "Qatar",
	},
	{
		 title: "Romania",
	},
	{
		 title: "Russia",
	},
	{
		 title: "Rwanda",
	},
	{
		 title: "Saint Kitts and Nevis",
	},
	{
		 title: "Saint Lucia",
	},
	{
		 title: "Saint Vincent and the Grenadines",
	},
	{
		 title: "Samoa",
	},
	{
		 title: "San Marino",
	},
	{
		 title: "Sao Tome and Principe",
	},
	{
		 title: "Saudi Arabia",
	},
	{
		 title: "Senegal",
	},
	{
		 title: "Serbia",
	},
	{
		 title: "Seychelles",
	},
	{
		 title: "Sierra Leone",
	},
	{
		 title: "Singapore",
	},
	{
		 title: "Sint Maarten",
	},
	{
		 title: "Slovakia",
	},
	{
		 title: "Slovenia",
	},
	{
		 title: "Solomon Islands",
	},
	{
		 title: "Somalia",
	},
	{
		 title: "South Africa",
	},
	{
		 title: "South Korea",
	},
	{
		 title: "South Sudan",
	},
	{
		 title: "Spain",
	},
	{
		 title: "Sri Lanka",
	},
	{
		 title: "Sudan",
	},
	{
		 title: "Suriname",
	},
	{
		 title: "Swaziland",
	},
	{
		 title: "Sweden",
	},
	{
		 title: "Switzerland",
	},
	{
		 title: "Syria",
	},
	{
		 title: "Taiwan",
	},
	{
		 title: "Tajikistan",
	},
	{
		 title: "Tanzania",
	},
	{
		 title: "Thailand",
	},
	{
		 title: "Timor-Leste",
	},
	{
		 title: "Togo",
	},
	{
		 title: "Tonga",
	},
	{
		 title: "Trinidad and Tobago",
	},
	{
		 title: "Tunisia",
	},
	{
		 title: "Turkey",
	},
	{
		 title: "Turkmenistan",
	},
	{
		 title: "Tuvalu",
	},
	{
		 title: "Uganda",
	},
	{
		 title: "Ukraine",
	},
	{
		 title: "United Arab Emirates",
	},
	{
		 title: "United Kingdom",
	},
	{
		 title: "Uruguay",
	},
	{
		 title: "Uzbekistan",
	},
	{
		 title: "Vanuatu",
	},
	{
		 title: "Venezuela",
	},
	{
		 title: "Vietnam",
	},
	{
		 title: "Yemen",
	},
	{
		 title: "Zambia",
	},
	{
		 title: "Zimbabwe",
	}],
};

var arrProvider = {
	title: "Provider",
	subcats: [
		{
			 title: "OSM",
		},
		{
			 title: "VMAP0",
		},
		{
			 title: "VMAO1",
		},
	],
};

var arrCategories = [arrPhysicalData, arrHumanData, arrCountry, arrProvider];
