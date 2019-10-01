/*
laptop schema
{id,type,model,brand}

processor schema
{id,type,model,brand,sku,price,sku,model,brand,threads,graphicsCores,base,boost,technology,cTDP,description}

ram schema
{id,type,sku,brand,capacity,speed,price,interface}

display schema
{id,type,brand,sku,x,y,diagonal,nits,technology,refresh,responseTime,price}

types(filter)
{ap:application processor, ram, storage, display, acc:accessories, radio}
*/

/**
 * @name Filters
 */
export const fiter = [
    'ap',
    'ram',
    'storage',
    'display',
    'acc',
    'radio',
]
/**
 * @name Products
 */
export const products = [
    //processors
    {
        id: 0,
        type: 'ap',
        sku: '3200g',
        model: 'Ryzen™ 3 3200G with Radeon™ Vega 8 Graphics',
        brand: 'AMD',
        cores: 4,
        threads: 4,
        graphicsCores: 8,
        base: 3.6,
        boost: 4.0,
        graphicsBoost:1.25,
        technology: '12nm FinFET',
        cTDP: '45-65W',
        description:'blurb',
        price: 119.99
    },
    {
        id: 1,
        type: 'ap',
        sku: '3400g',
        model: 'Ryzen™ 5 3400G with Radeon™ RX Vega 11 Graphics',
        brand: 'AMD',
        cores: 4,
        threads: 8,
        graphicsCores: 11,
        base: 3.7,
        boost: 4.2,
        graphicsBoost:1.4,
        technology: '12nm FinFET',
        cTDP: '45-65W',
        description:'blurb',
        price: 169.99
    },
    //ram
    {
        id: 2,
        type: 'ram',
        capacity: 4,
        interface: 'sodimm/ddr4',
        speed: 2933,
        brand: 'samsung',
        sku: '111zaknada-sam-mobi-4',
        price: 39.99
    },
    {
        id: 3,
        type: 'ram',
        capacity: 8,
        interface: 'sodimm/ddr4',
        speed: 2933,
        brand: 'samsung',
        sku: '111zaknada-sam-mobi-8',
        price: 69.99
    },
    {
        id: 4,
        type: 'ram',
        capacity: 16,
        interface: 'sodimm/ddr4',
        speed: 2933,
        brand: 'samsung',
        sku: '111zaknada-sam-mobi-16',
        price: 99.99
    },
    //display
    {
        id:5,
        type:'display',
        brand:'APUsilicon',
        sku:'disp-ultrawide-ips-rev-1',
        x:3840,
        y:1440,
        diagonal:15,
        nits:300,
        refresh:60,
        responseTime:5,
        technology:'ips',
        price:199.99,
        description:'blurb'
    },
    {
        id:6,
        type:'display',
        brand:'APUsilicon',
        sku:'disp-ultrawide-eink-rev-1',
        x:5000,
        y:2500,
        diagonal:15,
        nits:50,
        refresh:30,
        responseTime:30,
        technology:'eink',
        price:199.99,
        description:'blurb'
    },
    {
        id:7,
        type:'display',
        brand:'APUsilicon',
        sku:'disp-ultrawide-oled-rev-1',
        x:3840,
        y:1440,
        diagonal:15,
        nits:400,
        refresh:60,
        responseTime:1,
        technology:'oled',
        price:199.99,
        description:'blurb'
    },
    {
        id:8,
        type:'display',
        brand:'APUsilicon',
        sku:'disp-ultrawide-ips-rev-1',
        x:2560,
        y:1080,
        diagonal:15,
        nits:600,
        refresh:120,
        responseTime:1,
        technology:'ips',
        price:199.99,
        description:'blurb'
    },
    {
        id:9,
        type:'display',
        brand:'APUsilicon',
        sku:'disp-ultrawide-laser-rev-1',
        x:2560,
        y:1080,
        diagonal:15,
        nits:1000,
        refresh:240,
        responseTime:1,
        technology:'laser',
        price:199.99,
        description:'blurb'
    },
]