export const mainPageList = [
    //Model 3
    {
        title: "Model 3",
        subTitle: "Long Range AWD From $34,990",
        description: "After Est. Savings",
        black_text: true,
        poster: "../assets/mainpage-images/model3-images/tesla-model3.avif",
        buttons: [
            {
                label: "Order Now",
                link: "/order_now_model3",
            },
            {
                label: "Demo Drive",
                link: "/demo_drive",
            },
        ],
        order_data: {
            name: "Model 3",
            options: [
                {
                    option_name: "Rear Wheel Drive",
                    option_price: "$33,990",
                    option_machine: ["272mi", "125mph", "5.8sec"],
                    option_description: "Include est. 5-year gas savings of $5,000."
                },
                {
                    option_name: "Long Range All Wheel Drive",
                    option_price: "$34,990",
                    option_machine: ["341mi", "125mph", "4.2sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $5,000."
                },
                {
                    option_name: "Performance All Wheel Drive",
                    option_price: "$42,490",
                    option_machine: ["303mi", "163mph", "2.9sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $5,000."
                }
            ],
            colors: [
                {
                    color_name: "Slealth Grey", 
                    color_price: "Included",
                    color_icon: "../assets/mainpage-images/color-icons/stealth_grey.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg", 
                    ],
                    wheel2_cars:  [
                        "../assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/stealth_grey/nova_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Pearl White",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/pear_white.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg"
                    ],
                    wheel2_cars:  [
                        "../assets/mainpage-images/model3-images/pear_white/nova_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/pear_white/nova_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/nova_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/nova_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/nova_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Deep Blue Metallic",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/deep_blue.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/nova_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Solid Black",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/solid_black.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg", 
                    ],
                    wheel2_cars:  [
                        "../assets/mainpage-images/model3-images/solid_black/nova_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/solid_black/nova_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/nova_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/nova_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/solid_black/nova_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg" 
                    ],
                },
                {
                    color_name: "Ultra Red",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/ultra_red.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg"
                    ],
                    wheel2_cars:  [
                        "../assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/nova_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg"
                    ],
                }
            ],
            wheels: [
                { 
                    wheel_name: "18\" Photon Wheels",
                    wheel_price: "Included",
                    wheel_description: ["All-Season Tires", "Range (EPA est.) : 272mi"],
                    wheel_icon: "../assets/mainpage-images/model3-images/photon_wheel_icon.avif"
                },
                { 
                    wheel_name: "19\" Nova Wheels",
                    wheel_price: "$1,000",
                    wheel_description: ["All Season Tires", "Range (est.) : 248mi"],
                    wheel_icon: "../assets/mainpage-images/model3-images/nova_wheel_icon.avif"
                }
            ],
            interiors: [
                {   
                    interior_description: "Black",
                    interior_price: "Included",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior-black.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-black.jpeg",
                        "Pearl White": "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-black.jpeg",
                        "Deep Blue Metallic": "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-black.jpeg",
                        "Solid Black": "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-black.jpeg",
                        "Ultra Red": "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-black.jpeg",
                        "Lunar Silver": "",
                    }
                },
                {   
                    interior_description: "Black and White", 
                    interior_price: "$1,000", 
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_white.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/model3-images/stealth_grey/photon_wheels/detail5-white.jpeg",
                        "Pearl White": "../assets/mainpage-images/model3-images/pear_white/photon_wheels/detail5-white.jpeg",
                        "Deep Blue Metallic": "../assets/mainpage-images/model3-images/deep_blue/photon_wheels/detail5-white.jpeg",
                        "Solid Black": "../assets/mainpage-images/model3-images/solid_black/photon_wheels/detail5-white.jpeg",
                        "Ultra Red": "../assets/mainpage-images/model3-images/ultra_red/photon_wheels/detail5-white.jpeg",
                        "Lunar Silver": "",
                    }
                }
            ],
            seating_layouts: [],
            steering_controls: [],
            accessories: [
                {
                    accessories_description: "Model 3 Roof Rack",
                    accessories_price: "$400",
                },
                {
                    accessories_description: "Model 3 Center Console Trays",
                    accessories_price: "$35",
                },
                {
                    accessories_description: "Model 3 All-Weather Interior Liners",
                    accessories_price: "$225",
                },
            ],
            last_orders: [
                "Order Your Model 3",
                "Est. Delivery: Jun 2024",
                "Your design qualifies for a $7,500 federal tax credit for eligible buyers.",
            ],
        }  
    },
    //Model Y
    {
        title: "Model Y",
        subTitle: "From $31,490",
        description: "After Est. Savings",
        black_text: true,
        poster: "../assets/mainpage-images/modely-images/tesla-modely.avif",
        buttons: [
            {
                label: "Order Now",
                link: "/order_now_modely",
            },
            {
                label: "Demo Drive",
                link: "/demo_drive",
            },
        ],
        order_data: {
            name: "Model Y",
            options: [
                {
                    option_name: "Long Range Rear Wheel Drive",
                    option_price: "$31,490",
                    option_machine: ["320mi", "135mph", "6.5sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
                },
                {
                    option_name: "Long Range All Wheel Drive",
                    option_price: "$34,490",
                    option_machine: ["308mi", "135mph", "4.8sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
                },
                {
                    option_name: "Performance All Wheel Drive",
                    option_price: "$37,990",
                    option_machine: ["279mi", "155mph", "3.5sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,000.",
                }
            ],
            colors: [
                {
                    color_name: "Slealth Grey",
                    color_price: "Included",
                    color_icon: "../assets/mainpage-images/color-icons/stealth_grey.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/gemini_wheels/detail5-white.jpeg", 
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Pearl White",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/pear_white.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/gemini_wheels/detail5-white.jpeg", 
                        
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Deep Blue Metallic",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/deep_blue.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/gemini_wheels/detail5-white.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail5-white.jpeg"
                    ],
                },
                {
                    color_name: "Solid Black",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/solid_black.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modely-images/solid_black/gemini_wheels/detail5-white.jpeg", 
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail5-white.jpeg" 
                    ],
                },
                {
                    color_name: "Ultra Red",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/ultra_red.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modely-images/ultra_red/gemini_wheels/detail5-white.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail5-white.jpeg"
                    ],
                }
            ],
            wheels: [
                { 
                    wheel_name: "19\" Gemini Dark Wheels",
                    wheel_price: "Included",
                    wheel_description: [" All Season Tires", "Range (est.) : 320mi"],
                    wheel_icon: "../assets/mainpage-images/modely-images/gemini_wheel_icon.avif"
                },
                { 
                    wheel_name: "20\" Induction Wheels",
                    wheel_price: "$2,000",
                    wheel_description: ["All Season Tires", "Range (est.) : 295mi"],
                    wheel_icon: "../assets/mainpage-images/modely-images/induction_wheel_icon.avif"
                }
            ],
            interiors: [
                {   
                    interior_description: "Black", 
                    interior_price: "Included",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior-black.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail5-black.jpeg",
                        "Pearl White": "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail5-black.jpeg",
                        "Deep Blue Metallic": "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail5-black.jpeg",
                        "Solid Black": "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail5-black.jpeg",
                        "Ultra Red": "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail5-black.jpeg",
                        "Lunar Silver": "",
                    }
                },
                {   
                    interior_description: "Black and White", 
                    interior_price: "$2,000",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_white.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/modely-images/slealth_grey/induction_wheels/detail5-white.jpeg",
                        "Pearl White": "../assets/mainpage-images/modely-images/pear_white/induction_wheels/detail5-white.jpeg",
                        "Deep Blue Metallic": "../assets/mainpage-images/modely-images/deep_blue/induction_wheels/detail5-white.jpeg",
                        "Solid Black": "../assets/mainpage-images/modely-images/solid_black/induction_wheels/detail5-white.jpeg",
                        "Ultra Red": "../assets/mainpage-images/modely-images/ultra_red/induction_wheels/detail5-white.jpeg",
                        "Lunar Silver": "",
                    }
                }
            ],
            seating_layous: [ "5" ],
            steering_controls: [],
            accessories: [
                {
                    accessories_description: "Model Y All-Weather Interior Liners",
                    accessories_price: "$225",
                },
                {
                    accessories_description: "Model Y Sunshade",
                    accessories_price: "$105",
                },
                {
                    accessories_description: "Model Y Center Console Trays",
                    accessories_price: "$35",
                },
            ],
            last_orders: [
                "Order Your Model Y",
                "Est. Delivery: Jun 2024",
                "Your design qualifies for a $7,500 federal tax credit for eligible buyers.",
            ],
        }  
    },
    //Model X
    {
        title: "Model X",
        subTitle: "From $$63,990",
        description: "After Est. Savings",
        black_text: true,
        poster: "../assets/mainpage-images/modelx-images/tesla-modelx.avif",
        buttons: [
            {
                label: "Order Now",
                link: "/order_now_modelx",
            },
            {
                label: "Demo Drive",
                link: "/demo_drive",
            },
        ],
        order_data: {
            name: "Model X",
            machine: {
                range: "335mi",
                speed: "149mph",
                mph: "3.8sec",
            },
            options: [
                {
                    option_name: "All Wheel Drive",
                    option_price: "$63,990",
                    option_machine: ["335mi", "149mph", "3.8sec"],
                    option_description: "Include $7,500 Federal Tax Credit and est. 5-year gas savings of $6,500."
                },
                {
                    option_name: "Plaid",
                    option_price: "$86,490",
                    option_machine: ["326mi", "149mph", "2.5sec"],
                    option_description: "Include est. 5-year gas savings of $6,500."
                },
            ],
            colors: [
                {
                    color_name: "Slealth Grey",
                    color_price: "Included",
                    color_icon: "../assets/mainpage-images/color-icons/stealth_grey.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-cream.jpeg", 
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/slealth_grey/turbine_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Pearl White",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/pear_white.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-white.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-cream.jpeg",  
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/pear_white/turbine_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Deep Blue Metallic",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/deep_blue.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/deep_blue/turbine_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Solid Black",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/solid_black.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-cream.jpeg",
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/solid_black/turbine_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Ultra Red",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/ultra_red.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/ultra_red/turbine_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Lunar Silver",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/lunar_silver.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/modelx-images/lunar_silver/turbine_wheels/detail5-cream.jpeg"
                    ],
                }
            ],
            wheels: [
                { 
                    wheel_name: "20\" Cyberstream Wheels",
                    wheel_price: "Included",
                    wheel_description: ["All Season Tires", "Range (est.) : 335mi"],
                    wheel_icon: "../assets/mainpage-images/modelx-images/cyberstream_wheel_icon.avif"
                },
                { 
                    wheel_name: "22\" Turbine Wheels", 
                    wheel_price: "$5,500",
                    wheel_description: ["All Season Tires", "Range (est.) : 322mi"],
                    wheel_icon: "../assets/mainpage-images/modelx-images/turbine_wheel_icon.avif"
                }
            ],
            interiors: [
                {   
                    interior_description: "Black", 
                    interior_price: "Included",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior-black.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-black.jpeg",
                        "Pearl White": "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-black.jpeg",
                        "Deep Blue": "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-black.jpeg",
                        "Solid Black": "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-black.jpeg",
                        "Ultra Red": "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-black.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-black.jpeg",
                    }
                },
                {   
                    interior_description: "Black and White", 
                    interior_price: "$2,000",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_white.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-white.jpeg",
                        "Pearl White": "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-white.jpeg",
                        "Deep Blue": "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-white.jpeg",
                        "Solid Black": "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-white.jpeg",
                        "Ultra Red": "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-white.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-white.jpeg",
                    }
                },
                {   
                    interior_description: "Cream", 
                    interior_price: "$2,000",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_cream.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/modelx-images/slealth_grey/cyberstream_wheels/detail5-cream.jpeg",
                        "Pearl White": "../assets/mainpage-images/modelx-images/pear_white/cyberstream_wheels/detail5-cream.jpeg",
                        "Deep Blue": "../assets/mainpage-images/modelx-images/deep_blue/cyberstream_wheels/detail5-cream.jpeg",
                        "Solid Black": "../assets/mainpage-images/modelx-images/solid_black/cyberstream_wheels/detail5-cream.jpeg",
                        "Ultra Red": "../assets/mainpage-images/modelx-images/ultra_red/cyberstream_wheels/detail5-cream.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/modelx-images/lunar_silver/cyberstream_wheels/detail5-cream.jpeg",
                    }
                }
            ],
            seating_layouts: [ "5", "6", "7" ],
            steering_controls: [
                {
                    steering_name: "Steering Wheel",
                    steering_icon: "../assets/mainpage-images/steeringwheel_icons/steeringwheel_icon.png",
                    steering_image: "../assets/mainpage-images/modelx-images/steering_control/steering_wheel.jpeg"
                },
                {
                    steering_name: "Yoke Steering",
                    steering_icon: "../assets/mainpage-images/steeringwheel_icons/yokesteering_icon.png",
                    steering_image: "../assets/mainpage-images/modelx-images/steering_control/yoke_steering.jpeg"
                }
            ],
            accessories: [
                {
                    accessories_description: "Model X Car Cover",
                    accessories_price: "$450",
                },
                {
                    accessories_description: "Air Compressor + Tire Repair Kit 3.0",
                    accessories_price: "$110",
                },
                {
                    accessories_description: "Model X All-Weather Interior Liners",
                    accessories_price: "$295",
                },
            ],
            last_orders: [
                "Order Your Model X",
                "Est. Delivery: Jun 2024",
                "",
            ],
        }  
    },
    //Model S
    {
        title: "Model S",
        subTitle: "From $66,490",
        description: "After Est. Savings",
        black_text: false,
        poster: "../assets/mainpage-images/models-images/tesla-models.avif",
        buttons: [
            {
                label: "Order Now",
                link: "/order_now_models",
            },
            {
                label: "Demo Drive",
                link: "/demo_drive",
            },
        ],
        order_data: {
            name: "Model S",
            machine: {
                range: "402mi",
                speed: "130mph",
                mph: "3.1sec",
            },
            options: [
                {
                    option_name: "All Wheel Drive",
                    option_price: "$66,490",
                    option_machine: ["402mi", "130mph", "3.1sec"],
                    option_description: "Include est. 5-year gas savings of $6,500.",
                },
                {
                    option_name: "Plaid",
                    option_price: "$81,490",
                    option_machine: ["359mi", "200mph", "1.99sec"],
                    option_description: "Include est. 5-year gas savings of $6,500.",
                },
            ],
            colors: [
                {
                    color_name: "Slealth Grey",
                    color_price: "Included",
                    color_icon: "../assets/mainpage-images/color-icons/stealth_grey.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-cream.jpeg", 
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/slealth_grey/arachnid_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Pearl White",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/pear_white.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-white.jpeg",  
                        "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-cream.jpeg",   
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/pear_white/arachnid_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Deep Blue Metallic",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/deep_blue.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/deep_blue/arachnid_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Solid Black",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/solid_black.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-cream.jpeg" 
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/solid_black/arachnid_wheels/detail5-cream.jpeg" 
                    ],
                },
                {
                    color_name: "Ultra Red",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/ultra_red.avif",
                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/ultra_red/arachnid_wheels/detail5-cream.jpeg"
                    ],
                },
                {
                    color_name: "Lunar Silver",
                    color_price: "$1000",
                    color_icon: "../assets/mainpage-images/color-icons/lunar_silver.avif",

                    wheel1_cars: [
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-black.jpeg",
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-cream.jpeg"
                    ],
                    wheel2_cars: [
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail1.jpeg",   
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail2.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail3.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail4.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-black.jpeg", 
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-white.jpeg",
                        "../assets/mainpage-images/models-images/lunar_silver/arachnid_wheels/detail5-cream.jpeg"
                    ],
                }
            ],
            wheels: [
                { 
                    wheel_name: "19\" Tempest Wheels",
                    wheel_price: "Included",
                    wheel_description: ["All Season Tires", "Range (est.) : 402mi"],
                    wheel_icon: "../assets/mainpage-images/models-images/tempest_wheel_icon.avif"
                },
                {  
                    wheel_name: "21\" Arachnid Wheels",
                    wheel_price: "$4,500",
                    wheel_description: ["All Season Tires", "Range (est.) : 380mi"],
                    wheel_icon: "../assets/mainpage-images/models-images/arachnid_wheel_icon.avif"
                }
            ],
            interiors: [
                {   
                    interior_description: "Black", 
                    interior_price: "Included",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior-black.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-black.jpeg",
                        "Pear White": "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-black.jpeg",
                        "Deep Blue": "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-black.jpeg",
                        "Solid Black": "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-black.jpeg",
                        "Ultra Red": "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-black.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-black.jpeg",
                    }
                },
                {   
                    interior_description: "Black and White", 
                    interior_price: "$2,000",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_white.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-white.jpeg",
                        "Pear White": "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-white.jpeg",
                        "Deep Blue": "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-white.jpeg",
                        "Solid Black": "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-white.jpeg",
                        "Ultra Red": "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-white.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-white.jpeg",
                    }
                },
                {   
                    interior_description: "Cream", 
                    interior_price: "$2,000",
                    interior_icon: "../assets/mainpage-images/interior-icons/interior_cream.avif", 
                    interior_images: {
                        "Slealth Grey": "../assets/mainpage-images/models-images/slealth_grey/tempest_wheels/detail5-cream.jpeg",
                        "Pear White": "../assets/mainpage-images/models-images/pear_white/tempest_wheels/detail5-cream.jpeg",
                        "Deep Blue": "../assets/mainpage-images/models-images/deep_blue/tempest_wheels/detail5-cream.jpeg",
                        "Solid Black": "../assets/mainpage-images/models-images/solid_black/tempest_wheels/detail5-cream.jpeg",
                        "Ultra Red": "../assets/mainpage-images/models-images/ultra_red/tempest_wheels/detail5-cream.jpeg",
                        "Lunar Silver": "../assets/mainpage-images/models-images/lunar_silver/tempest_wheels/detail5-cream.jpeg",
                    }
                }
            ],
            seating_layouts: [],
            steering_controls: [
                {
                    steering_name: "Steering Wheel",
                    steering_icon: "../assets/mainpage-images/steeringwheel_icons/steeringwheel_icon.png",
                    steering_image: "../assets/mainpage-images/models-images/steering_control/steering_wheel.jpeg"
                },
                {
                    steering_name: "Yoke Steering",
                    steering_icon: "../assets/mainpage-images/steeringwheel_icons/yokesteering_icon.png",
                    steering_image: "../assets/mainpage-images/models-images/steering_control/yoke_steering.jpeg"
                }
            ],
            accessories: [
                {
                    accessories_description: "Model S Sunshade",
                    accessories_price: "$105",
                },
                {
                    accessories_description: "Model S All-Weather Interior Liners",
                    accessories_price: "$250",
                },
                {
                    accessories_description: "Model S Roof Rack",
                    accessories_price: "$450",
                },
            ],
            last_orders: [
                "Order Your Model S",
                "Est. Delivery: Jun 2024",
                "",
            ],
        }  
    },
];

export const autoPilotVideoList = [
    {
        technology: "Navigate No Auto Pilot",
        video: "../assets/mainpage-images/autopilots/1.navigate_on_autopilot.webm",
    }, 
    {
        technology: "Auto Lane Change",
        video: "../assets/mainpage-images/autopilots/2.auto_lane_change.webm",
    }, 
    {
        technology: "Auto Park",
        video: "../assets/mainpage-images/autopilots/3.autopark.webm",
    }, 
    {
        technology: "Smart Summon",
        video: "../assets/mainpage-images/autopilots/4.smart_summon.webm",
    }, 
];

export const cyberTruckList = {
    title: {
        text: "Cybertruck",
        image: "../assets/mainpage-images/cybertruck/cybertruck-logo.svg"
    },
    poster: "../assets/mainpage-images/cybertruck/tesla-cybertruck.avif",
    buttons: [
        {
            label: "Order Now",
            link: "/order_now_cybertruck",
        },
        {
            label: "Learn More",
            link: "/learn_more_cybertruck",
        },
    ],
    order_data: {
        poster: "../assets/mainpage-images/cybertruck/ordernow-images/poster.avif",
        purchase_prices: [
            { 
                price: "EST. $60,990",
                option: "REAR-WHEEL DRIVE",
                description: [
                    "AVAILABLE IN 2025",
                    "250 MI. RANGE (EST.)",
                    "6.5 SEC. 0-60 MPH",
                ]
            },
            { 
                price: "EST. $79,990",
                option: "ALL-WHEEL DRIVE",
                description: [
                    "DELIVERY IN 2025",
                    "340 MI. RANGE (EST.)",
                    "4.1 SEC. 0-60 MPH",
                    "112 MPH TOP SPEED",
                    "600 HORSEPOWER",
                    "7,435 LB-FT TORQUE",
                    "11,000 LBS. TOWING CAPACITY"
                ]
            },
            { 
                price: "EST. $99,990",
                option: "CYBERBEAST",
                description: [
                    "DELIVERY IN 2025",
                    "320 MI. RANGE (EST.)",
                    "2.6 SEC. 0-60 MPH†",
                    "130 MPH TOP SPEED",
                    "8405HORSEPOWER",
                    "10,296 LB-FT TORQUE",
                    "11,000 LBS. TOWING CAPACITY"
                ]
            }
        ],
        purchase_price_description: "All prices are shown without incentives or est. 3-year gas savings.",
        saving_prices: [
            { 
                price: "EST. $57,390*",
                option: "REAR-WHEEL DRIVE",
                description: [
                    "AVAILABLE IN 2025",
                    "250 MI. RANGE (EST.)",
                    "6.5 SEC. 0-60 MPH",
                ]
            },
            { 
                price: "EST. $76,390*",
                option: "ALL-WHEEL DRIVE",
                description: [
                    "DELIVERY IN 2025",
                    "340 MI. RANGE (EST.)",
                    "4.1 SEC. 0-60 MPH",
                    "112 MPH TOP SPEED",
                    "600 HORSEPOWER",
                    "7,435 LB-FT TORQUE",
                    "11,000 LBS. TOWING CAPACITY"
                ]
            },
            { 
                price: "EST. $96,390*",
                option: "CYBERBEAST",
                description: [
                    "DELIVERY IN 2025",
                    "320 MI. RANGE (EST.)",
                    "2.6 SEC. 0-60 MPH†",
                    "130 MPH TOP SPEED",
                    "8405HORSEPOWER",
                    "10,296 LB-FT TORQUE",
                    "11,000 LBS. TOWING CAPACITY"
                ]
            }
        ],
        saving_price_description: "*Prices assume est. gas savings of $3,600 over 3 years. Cybertruck is likely to qualify for the federal tax credit later in 2024."
    },
    learn_more_data: {
        poster: "../assets/mainpage-images/cybertruck/learnmore-images/poster.avif",
        spec_image: "../assets/mainpage-images/cybertruck/learnmore-images/spec-image.avif",
        spec_description: {
            "TOWING CAPACITY": "11,000",
            "EST. RANGE": "340",
            "0-60 MPH": "2.6"            
        },
        build_for_anyplanet: {
            title: "Build for - any planet",
            video: "../assets/mainpage-images/cybertruck/learnmore-images/videos/1_build_for_anyplanet.webm",
            description: "DURABLE AND RUGGED ENOUGH TO GO ANYWHERE. TACKLE ANYTHING WITH ELECTRONICALLY ADAPTIVE AIR SUSPENSION THAT OFFERS 12” OF TRAVEL AND 16” OF CLEARANCE.",
            guide_link: "https://service.tesla.com/docs/Cybertruck/cybertruck_offroad_guide.pdf",
        },
        nopaint_nochips: {
            title: "No Paint, No Chips",
            video: "../assets/mainpage-images/cybertruck/learnmore-images/videos/2_nopaint_nochips.mp4",
            description: "AN ULTRA-HARD STAINLESS-STEEL EXOSKELETON HELPS TO REDUCE DENTS, DAMAGE AND LONG-TERM CORROSION. REPAIRS ARE SIMPLE AND QUICK.",
        },
        shatter_resistant: {
            title: "Shatter-Resistant",
            video: "../assets/mainpage-images/cybertruck/learnmore-images/videos/3_shatter_resistant.mp4",
            description: "ARMOR GLASS CAN RESIST THE IMPACT OF A BASEBALL AT 70 MPH OR CLASS 4 HAIL. ACOUSTIC GLASS HELPS MAKE THE CABIN AS QUIET AS OUTER SPACE."
        },
        beyond_prepared: {
            title: "Beyond - Prepared",
            video: "../assets/mainpage-images/cybertruck/learnmore-images/videos/4_beyond_prepared.mp4",
            description: "HAUL EVERYTHING YOU NEED WITH 2,500 POUNDS PAYLOAD AND 11,000 POUNDS TOWING CAPACITY—THE EQUIVALENT OF AN AVERAGE AFRICAN ELEPHANT. THE SUPER-TOUGH COMPOSITE BED DOESN’T NEED A LINER AND IS BIG ENOUGH FOR 4'X8’ CONSTRUCTION MATERIALS.",
        },
        advertises: [
            {
                image: "../assets/mainpage-images/cybertruck/learnmore-images/advertise-images/pack_itup.avif",
                title: "Pack - It up",
                description: "ACCESS A 6’X4’ BED, PLUS EVEN MORE ROOM IN THE FRONT TRUNK, ON THE ROOF AND IN A HIDDEN GEAR LOCKER.",
            },
            {
                image: "../assets/mainpage-images/cybertruck/learnmore-images/advertise-images/load_itup.avif",
                title: "Load - It up",
                description: "WITH A MAXIMUM PAYLOAD OF 2,500 POUNDS AND 67 CUBIC FEET OF LOCKABLE STORAGE, CYBERTRUCK HAS ALL THE CAPACITY YOU NEED.",
            },
            {
                image: "../assets/mainpage-images/cybertruck/learnmore-images/advertise-images/lock_itup.avif",
                title: "Lock - It up",
                description: "AFTER YOU LOAD IT UP, LOCK IT UP FOR PEACE OF MIND—UNDER THE VAULT BED COVER. FOLD UP THE SEATS IN THE SECOND ROW FOR AN EXTRA 54 CUBIC FEET OF STORAGE.",
            }   
        ],
        into_thewild: {
            title: "Into the - Wild",
            image: "../assets/mainpage-images/cybertruck/learnmore-images/into_thewild.avif",
            description: "TRAVEL UP TO 340 MILES¹ ON A SINGLE CHARGE—ENOUGH TO GET YOU INTO THE BACKCOUNTRY AND BEYOND. RECOVER UP TO 136 MILES OF RANGE WITH JUST 15 MINUTES OF SUPERCHARGING.",
        },
        power_yourside: {
            title: "Power - Your Side",
            image: "../assets/mainpage-images/cybertruck/learnmore-images/power_yourside.avif",
            description: "OPERATE YOUR TOOLS OR CHARGE ANY EV WITH INTEGRATED 120V AND 240V BED AND CABIN OUTLETS. DURING A GRID OUTAGE, PROVIDE UP TO 11.5 KW OF POWER DIRECTLY TO YOUR HOME TO HELP KEEP THE LIGHTS ON.",
        },
        dopamine_ontap: {
            title: "Dopamine - On Tap",
            video: "../assets/mainpage-images/cybertruck/learnmore-images/videos/5_dopamine_ontap.mp4",
            description: "GO 0-60 MPH IN JUST 2.6 SECONDS† IN BEAST MODE WHILE MAINTAINING HIGH-SPEED STABILITY. WITH STEER-BY-WIRE AND REAR STEERING, YOU GET THE HANDLING OF A SPORTS CAR AND A BETTER TURNING RADIUS THAN MOST SEDANS.",
        },
        inside_outside: {
            title: "Rugged Outside - Comfortable Inside",
            image: "../assets/mainpage-images/cybertruck/learnmore-images/inside_outside.avif",
            description: "IMMERSE YOURSELF IN A SPACIOUS, MODERN CABIN PACKED WITH ADVANCED TECHNOLOGY FEATURES AND ENTERTAINMENT.",
        },
        slideshows: [
            {
                title: "THEATER - ON WHEELS",
                description: "MASSIVE 18.5” INFINITY TOUCHSCREEN IN THE FRONT AND 9.4” TOUCHSCREEN IN THE BACK WITH AN ALL-NEW USER INTERFACE.",
                image: "../assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/theater_on_wheels.avif"
            },
            {
                title: "THEASUBLIME - AUDIOTER",
                description: "RECORDING STUDIO SOUND DYNAMICS WITH 15 SPEAKERS, INCLUDING 2 DEDICATED SUBWOOFERS AND DISTRIBUTED AMPLIFIERS.",
                image: "../assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/sublime_audio.avif",
            },
            {
                title: "CHARGE - EVERYTHING",
                description: "FAST-CHARGE YOUR PHONE, LAPTOP OR TOOLS FROM THE FRONT SEAT, BACK SEAT OR BED WITH WIRELESS CHARGING, 65W USB-C AND 120V/240V OUTLETS.",
                image: "../assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/charge_everything.avif",
            },
            {
                title: "BIOWEAPON - DEFENSE MODE",
                description: "BUILT-IN HOSPITAL GRADE HEPA FILTER HELPS PROVIDE PROTECTION FROM 99.97% OF AIRBORNE PARTICLES.",
                image: "../assets/mainpage-images/cybertruck/learnmore-images/slideshow-images/bioweapon_defense_mode.avif",
            },
        ]
    }
}