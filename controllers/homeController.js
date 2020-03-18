const homeController = {
    index: (req, res) => {
        let servicos = [{nome: 'Desenvolvimento Web Dani', imagem: '/imagens/undraw_dev_focus.svg'},
                        {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
                        {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
                        ];
        let banners= ['/imagens/html5.jpg',
                      '/imagens/download.jpg',
                      '/imagens/dwn.jpg'
                    ];

        res.render("index", { title: "Home", listaServicos: servicos, listaBanners: banners});
    } 
};

module.exports = homeController;