import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-registration',
  templateUrl: './online-registration.component.html',
  styleUrls: ['./online-registration.component.scss']
})
export class OnlineRegistrationComponent implements OnInit {

  constructor() { }

  regCats = [ 'Adult Hockey'
            , 'Beginner Hockey - Learn to Play'
            , 'Beginner Hockey - Learn to Skate'
            , 'Skate School'
            , 'Youth House Hockey'
            , 'Youth Travel Hockey - Wilmington IceHawks' ];

  registrantInfo = { fName: '', lName: '', address: '', address2: '', city: '', state: '', zip: '', phone: '', dob: '' };

  registrationInfo = { category: '', program: '', pos: '', basePrice: 0,
                       rentEquip: '', addFee: 0, totalFee: 0, gender: '',
                       email: '', notes: '', lastTeam: '', usaNum: '' };

  adultLeagues = [
    { name: 'C League - Goalie', price: 145, pos: '639' },
    { name: 'C League - Skater', price: 330, pos: '4690' },
    { name: 'B League - Goalie', price: 145, pos: '639' },
    { name: 'B League - Skater', price: 330, pos: '471' },
    { name: 'A League - Goalie', price: 145, pos: '639' },
    { name: 'A League - Skater', price: 330, pos: '472' },
    { name: '33+ League - Goalie', price: 145, pos: '639' },
    { name: '33+ League - Skater', price: 330, pos: '442' },
    { name: 'Adult Student Player', price: 280, pos: '8385' }
  ];

  youthLeagues = [
    { name: '8U Mites - Skater', price: 265, pos: '1328' },
    { name: '8U Mites - Goalie', price: 100, pos: '549' },
    { name: '10U Squirts - Skater', price: 290, pos: '443' },
    { name: '10U Squirts - Goalie', price: 100, pos: '2048' },
    { name: '12U Pee Wees - Skater', price: 290, pos: '446' },
    { name: '12U Pee Wees - Goalie', price: 100, pos: '2066' },
    { name: '14U Bantams - Skater', price: 290, pos: '469' },
    { name: '14U Bantams - Goalie', price: 100, pos: '2068' },
    { name: '18U Midgets - Skater', price: 290, pos: '470' },
    { name: '18U Midgets - Goalie', price: 100, pos: '2069' }
  ];

  learnPrograms = [
    { name: 'Snow Plow Sam - Beginner', price: 135, pos: '675' },
    { name: 'Snow Plow Sam - Advanced', price: 135, pos: '675' },
    { name: 'Sk8 School Basic 1 - Beginner', price: 135, pos: '675' },
    { name: 'Sk8 School Basic 2', price: 135, pos: '675' },
    { name: 'Sk8 School Basic 3', price: 135, pos: '675' },
    { name: 'Sk8 School Basic 4', price: 135, pos: '675' },
    { name: 'Sk8 School Basic 5/6', price: 135, pos: '675' },
    { name: 'Freeskate 1/2', price: 135, pos: '675' }
  ];

  rentalTypes = [
    { type: 'Yes - Pay $25 rental fee now', fee: 25 },
    { type: 'Yes - Will pay rental fee in person', fee: 0 },
    { type: 'Yes - Waive fee for first time Beginner Hockey participant', fee: 0 },
    { type: 'No', fee: 0 }
  ];

  icehawkLeagues = [
    { name: 'IceHawks Travel Squirts', price: 0, pos: '341' },
    { name: 'IceHawks Travel PeeWees', price: 0, pos: '358' },
    { name: 'IceHawks Travel Bantams', price: 0, pos: '372' },
    { name: 'IceHawks Travel Midgets', price: 0, pos: '376' }
  ];

  progNames = [
    { name: '', price: 0, pos: '' }
  ];

  programSection = true;
  rentalSection = true;
  subtotalSection = true;
  rentalSubtotal = true;

  ngOnInit() {
  }

  categorySelected() {
    this.programSection = true;
    this.rentalSection = true;
    this.rentalSubtotal = true;
    this.subtotalSection = true;
    this.registrationInfo.addFee = 0;

    switch (this.registrationInfo.category) {
      case 'Adult Hockey':
        this.progNames = this.adultLeagues;
        this.programSection = false;
        break;
      case 'Beginner Hockey - Learn to Play':
        this.rentalSection = false;
        this.registrationInfo.program = this.registrationInfo.category;
        this.registrationInfo.pos = '694';
        this.registrationInfo.basePrice = 125;
        break;
      case 'Beginner Hockey - Learn to Skate':
        this.rentalSection = false;
        this.registrationInfo.program = this.registrationInfo.category;
        this.registrationInfo.pos = '9356';
        this.registrationInfo.basePrice = 125;
        break;
      case 'Skate School':
        this.progNames = this.learnPrograms;
        this.programSection = false;
        break;
      case 'Youth House Hockey':
        this.progNames = this.youthLeagues;
        this.programSection = false;
        break;
      case 'Youth Travel Hockey - Wilmington IceHawks':
        this.progNames = this.icehawkLeagues;
        this.programSection = false;
        break;
    }
  }

  programSelected() {
    const programData = this.progNames.find(x => x.name === this.registrationInfo.program);
    this.registrationInfo.basePrice = programData.price;
    this.registrationInfo.pos = programData.pos;
    this.subtotalSection = false;
    this.registrationInfo.totalFee = this.registrationInfo.basePrice;
  }

  rentalSelected() {
    this.subtotalSection = false;
    this.rentalSubtotal = false;
    const rental = this.rentalTypes.find(x => x.type === this.registrationInfo.rentEquip);
    this.registrationInfo.addFee = rental.fee;
    this.registrationInfo.totalFee = this.registrationInfo.basePrice + this.registrationInfo.addFee;
  }

}
