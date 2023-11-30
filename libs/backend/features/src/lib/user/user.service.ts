import { Injectable, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class CircuitService {
    TAG = 'CircuitService';

    private circuits$ = new BehaviorSubject([
        {
            id: '0',
            name: 'CM.com Circuit Zandvoort',
            location: 'Zandvoort, Nederland',
            length: 4259,
            mapIMG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Zandvoort_Circuit.png/1024px-Zandvoort_Circuit.png'
        },
        {
            id: '1',
            name: 'Circuit de Spa-Francorchamps',
            location: 'Stavelot, België',
            length: 7004,
            mapIMG: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Circuit_Spa_2007.png'
        },
        {
            id: '2',
            name: 'Autodromo Nazionale Monza',
            location: 'Monza, Italië',
            length: 5793,
            mapIMG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Monza_track_map.svg/1920px-Monza_track_map.svg.png'
        },
        {
            id: '3',
            name: 'Yas Marina Circuit',
            location: 'Yas, Verenigde Arabische Emiraten',
            length: 5281,
            mapIMG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Yas_Marina_Circuit.png/1920px-Yas_Marina_Circuit.png'
        },
        {
            id: '4',
            name: 'Autódromo José Carlos Pace',
            location: 'São Paulo, Brazillië',
            length: 4309,
            mapIMG: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Circuit_Interlagos.svg/1024px-Circuit_Interlagos.svg.png'
        },
    ]);


}