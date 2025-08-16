import { FaLinkedin, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { images } from '../constants/index';



export const links = [
    {
        name: 'About Us',
        link: 'aboutUs',
    },
    {
        name: 'Support Us',
        link: 'support',
    },
    {
        name: 'Our Team',
        link: 'team',
    },
    {
        name: 'Contact',
        link: 'contact',
    },
    {
        name: 'Blog',
        link: 'blog',
    },
];

export const socials = [
    {   
        platform: 'twitter',
        icon: <FaXTwitter />,
        link: '#',
    },
    {
        platform: 'facebook',
        icon: <FaFacebookF />,
        link: '#',
    },
    {
        platform: 'linkedin',
        icon: <FaLinkedin />,
        link: '#',
    },
    {
        platform: 'instagram',
        icon: <FaInstagram />,
        link: '#',
    },
    {
        platform: 'tiktok',
        icon: <FaTiktok />,
        link: '#',
    },
    {
        platform: 'youtube',
        icon: <FaYoutube />,
        link: 'https://youtube.com/@inclusivegrowthandprosperityin?si=wJa53eMA3_gdIrPZ',
    },
];



export const objectives = [
    {
        title: 'Empowerment',
        text: 'To implement efficient and effective advocacy and high – impact Empowerment programs and services that improves the quality of lives of the youth and working populace of Nigeria all over the world   in collaboration with strategic partners',
    },
    {
        title: 'Potential',
        text: 'To create a society where vulnerable individuals (women, youths, children, people living with disabilities) achieve their full potentials and actively contribute to national growth and sustainable development.',
    },
    {
        title: 'Compliance',
        text: 'Working tirelessly to be the most financially compliant NGO in Nigeria and Africa at large.  ',
    },
    {
        title: 'Advocacy',
        text: 'Improve the lives of the youth, children, women, working populace, physically challenged and other vulnerable population in Nigeria and Africa at large via; advocacy, counselling training, empowerment and follow up for effective implementation of process. ',
    },
    {
        title: 'Education',
        text: 'Provision of health education and facilities, promotion of girl child education, promotion of poverty alleviation/eradication programmes among Nigerians and Africans at large including those living in diaspora. ',
    },
    {
        title: 'Integration',
        text: 'Providing support in implementing and consolidating all existing machineries of social and cultural integration.',
    },
    {
        title: 'Sanitation',
        text: 'Sanitizing of Nigeria and Africans’ social media space through promotion of healthy social media interaction. ',
    },
    {
        title: 'Peace',
        text: 'Creation of high impact forum to foster peaceful coexistence through organisation of inter - state and international workshops, seminars, conferences and symposium.',
    },
    {
        title: 'Environment',
        text: 'Advocacy, support, and promotion of sustainable environment.',
    },
    {
        title: 'Governance',
        text: 'Advocacy and support and promotion of good governance, for sustainable democracy in Nigeria and African at large.',
    },
];

export const aboutData = [
    {
      title: 'Our Mission',
      text: 'Our mission is to bring lasting and positive change to lives of widows and the helpless children with no hope of education, true consistent advocacy and harnessing of human and material resources in the country and the world at large.',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.photoTwelve,
      id: 'missionSection'
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to make life more convenient for the widows and the less privileged making sure families are restored, those who are disadvantaged have choices and hope of living.',
      className: 'flex flex-col-reverse md:flex-row-reverse mb-10',
      imgUrl: images.photoOne,
      id: 'visionSection'
    }
];


export const teamData = [
    {
      name: 'Nicholas Adeiye Alonge',
      role: 'Founder/CEO',
      text: "Samuel Sunday Alonge is the CEO and founder of the Nicholas Adeiye Alonge Foundation (NAAF). Inspired by his grandparents' generosity, Samuel began his philanthropic journey in high school with the God's Pillar Society. He later established NAAF to support widows, children, and underprivileged youth. Through his work, Samuel continues to empower communities, advocate for education, and inspire others to give back.",
      number: '+234 703 875-4435',
      email: 'alongesamuel@gmail.com',
      emailLink: 'mailto: alongesamuel@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: '#',
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco
    },
    {
      name: 'Mr Stephen Olu & Mrs Peace Babaloye',
      role: 'National Coordinator',
      text: 'A unique couple who thrive on challenges and enjoy turning ideas into real-world solutions. We are deeply interested in reading and research , which keeps us balanced and inspired. We believe in lifelong learning, meaningful connections, and doing work that makes an impact. Both are members of Nigerian Navy',
      number: '+234 703 316-7726',
      email: 'babaloyeoluwaseun@gmail.com',
      emailLink: 'mailto: babaloyeoluwaseun@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: '#',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco3
    },
    {
      name: 'Kelechukwu Michael Ijeoma',
      role: 'Production Manager',
      text: "Kelechukwu Michael is a young Architect striving to make an impact in Nigeria and Africa as a whole. I am a hardworking fellow who would do what it takes to solve any problem encountered whether in a design brief, on site or in any real life situation.",
      number: '+234 803 588-5567',
      email: 'kelechukwuijeoma.m@gmail.com',
      emailLink: 'mailto: kelechukwuijeoma.m@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: 'http://LinkedIn.com/in/kelechukwu-ijeoma',
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco4
    },
    {
      name: 'Mr Olaonipekun Ademola',
      role: 'Planning Officer',
      text: 'Mr. Olaonipekun Ademola is a dedicated professional with a passion for urban planning and development. He has been instrumental in various community projects aimed at improving infrastructure and public spaces.',
      number: '+234 806 833-9347',
      email: 'olaonipekunademola@gmail.com',
      emailLink: 'mailto: olaonipekunademola@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: '#',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco6
    },
    {
      name: 'Josiah Zion Mauton',
      role: 'Member',
      text: "Passionate and, dedicated to driving positive change in  education, community development, and environmental sustainability. Committed to fostering impactful initiatives and empowering those in need.",
      number: '+234 701 828-0390',
      email: 'zionj5852@gmail.com',
      emailLink: 'mailto: zionj5852@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: 'http://linkedin.com/in/josiah-zion-20b378333',
      className: 'flex flex-col-reverse md:flex-row-reverse',
      imgUrl: images.exco2
    },
    {
      name: 'Mrs Stella Adegbite',
      role: 'Welfare officer',
      text: 'Mrs. Stella Adegbite is a dedicated welfare officer with a passion for improving the well-being of others. She has been involved in various initiatives aimed at providing support and assistance to those in need.',
      number: '+234 703 905-8905',
      email: 'nyemmi1@gmail.com',
      emailLink: 'mailto: nyemmi1@gmail.com',
      facebook: <FaFacebookF />,
      twitter: <FaXTwitter />,
      linkedin: <FaLinkedin />,
      facebookLink: '#',
      twitterLink: '#',
      linkedinLink: '#',
      className: 'flex flex-col-reverse md:flex-row',
      imgUrl: images.exco5
    },
];

export const stateAndLGA = [
    { state: 'Abia', lga: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"]},
    { state: 'Adamawa', lga: ["Demsa", "Fufore", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"] },
    { state: 'Akwa Ibom', lga: ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"] },
    { state: 'Anambra', lga: ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"] },
    { state: 'Bauchi', lga: ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"] },
    { state: 'Bayelsa', lga: ["Akolgoman", "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"] },
    { state: 'Benue', lga: ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"] },
    { state: 'Borno', lga: ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"] },
    { state: 'Cross River', lga: ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"] },
    { state: 'Delta', lga: ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"] },
    { state: 'Ebonyi', lga: ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaukwu", "Onicha", "Ohaozara"] },
    { state: 'Edo', lga: ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"] },
    { state: 'Ekiti', lga: ["Ado Ekiti", "Ikere", "Oye", "Ikole", "Irepodun/Ifelodun", "Ijero", "Ido/Osi", "Gbonyin", "Emure", "Ekiti West", "Ekiti East", "Ise/Orun", "Moba", "Efon", "Ilejemeje"] },
    { state: 'Enugu', lga: ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"] },
    { state: 'Gombe', lga: ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"] },
    { state: 'Imo', lga: ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West"] },
    { state: 'Jigawa', lga: ["Auyo", "Babura", "Birnin Kudu", "Buji", "Dutse", "Garki", "Gumel", "Guri", "Gwaurawa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"] },
    { state: 'Kaduna', lga: ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jama'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kano", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"] },
    { state: 'Kano', lga: ["Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gezawa", "Gwale", "Gaya", "Kabo", "Kano Municipal", "Karaye", "Kiru", "Kumbotso", "Kunchi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Tarauni", "Tofa", "Tudun Wada", "Warawa", "Wudil"] },
    { state: 'Katsina', lga: ["Batagarawa", "Batsari", "Baure", "Dandume", "Danmusa", "Dutsin-Ma", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Katsina", "Kurfi", "Mai'adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"] },
    { state: 'Kebbi', lga: ["Aleiro", "Arewa", "Argungu", "Augie", "Bagudo", "Dandi", "Fakai", "Gwandu", "Jega", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"] },
    { state: 'Kogi', lga: ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba-Bunu", "Kogi", "Mopa-Muro", "Ofu", "Ogori-Mangogo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"] },
    { state: 'Kwara', lga: ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"] },
    { state: 'Lagos', lga: ["Agege", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Bajulaye", "Bariga", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Ojodu", "Oshodi-Isolo", "Shomolu", "Surulere"] },
    { state: 'Nasarawa', lga: ["Akwanga", "Avia", "Doma", "Karu", "Keffi", "Kokona", "Lafia", "Nasarawa", "Niger", "Obi", "Toto", "Wamba"] },
    { state: 'Niger', lga: ["Agaie", "Agwara", "Bida", "Borgu", "Chanchaga", "Edati", "Gbako", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Moya", "Muya", "Pailoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"] },
    { state: 'Ogun', lga: ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko-Afon", "Ipokia", "Obafemi-Owode", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"] },
    { state: 'Ondo', lga: ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese-Odo", "Idanre", "Ifedore", "Ilaje", "Ile-Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"] },
    { state: 'Osun', lga: ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Isundaye", "Ola-Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"] },
    { state: 'Oyo', lga: ["Akinyele", "Atiba", "Atigbo", "Egbeda", "Ibadan North", "Ibadan North East", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Iseyin", "Itesiwaju", "Ivoru", "Kajola", "Lagelu", "Ogo Oluwa", "Ogbomoso North", "Ogbomoso South", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"] },
    { state: 'Plateau', lga: ["Bokkos", "Burin", "Bassa", "Chamba", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"] },
    { state: 'Rivers', lga: ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Gokana", "Ikwerre", "Emohua", "Eleme", "Omoku", "Opobo/Nkoro", "Ogu/Bolo", "Okrika", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ikwerre", "Tai"] },
    { state: 'Sokoto', lga: ["Sokoto South", "Sokoto North", "Binji", "Bodinga", "Dange-Shuni", "Gada", "Goronyo", "Illela", "Kebbe", "Kware", "Rabah", "Shagari", "Silame", "Sokoto East", "Tambuwal", "Tureta", "Wamakko", "Wurno", "Yabo"] },
    { state: 'Taraba', lga: ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gumti", "Jalingo", "Karim Lamido", "Karin", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Zing"] },
    { state: 'Yobe', lga: ["Azare", "Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Zing"] },
    { state: 'Zamfara', lga: ["Anka", "Bakura", "Birnin Magaji", "Bukkuyum", "Chafe", "Gummi", "Gusau", "Isa", "Kaura Namoda", "Kauran Namoda", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"] },
    { state: 'Federal Capital Territory (FCT), Abuja', lga: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Abuja Municipal Area Council (AMAC)", "Kwali"] }, 
];

export const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
    "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", 
    "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
    "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", 
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", 
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", 
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", 
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", 
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", 
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", 
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", 
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", 
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
  