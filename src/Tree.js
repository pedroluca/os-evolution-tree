import React from 'react';
import TreeNode from './TreeNode';

const treeData = {
    name: "Primeiros Sistemas Operacionais",
    description: "A primeira geração da computação moderna (1945 - 1955) não trabalhava com o conceito de sistema operacional propriamente dito, visto que as operações eram configuradas através do hardware. A principal implicação desta abordagem é o fato de que era muito difícil criar rotinas programáveis, exigindo trabalho intenso dos operadores de máquinas.",
    children: [
        {
            name: "Unix",
            icon: "linux",
            description: "O Unix é um sistema operacional importante na história da computação. Ele foi desenvolvido na década de 1960 e introduziu conceitos como usar texto para se comunicar e organizar arquivos em uma estrutura de pastas. Sua flexibilidade e capacidade de funcionar em diferentes tipos de computadores o tornaram popular. O Unix influenciou muitos sistemas modernos, como o Linux e o macOS, e ainda é usado amplamente hoje.",
            children: [
                {
                  name: "BSD",
                  icon: "bsd",
                  description: "O BSD é uma família de sistemas operacionais Unix-like conhecida por sua estabilidade e segurança. Baseado no Unix original da Universidade da Califórnia, Berkeley, foi lançado em 1977 e possui uma licença de software livre. Variantes como FreeBSD, OpenBSD e NetBSD são amplamente usadas em servidores e sistemas embarcados.",
                  children: [
                    {
                      name: "NeXTSTEP",
                      icon: "macos",
                      description: "O NEXTSTEP OS foi um sistema operacional desenvolvido pela NeXT Computer, uma empresa fundada por Steve Jobs após sair da Apple em 1985. Lançado em 1989, o NEXTSTEP foi baseado em um kernel Mach e no ambiente de desenvolvimento Objective-C. Ele foi notável por sua interface gráfica avançada e recursos inovadores, como o sistema de objetos distribuídos. O NEXTSTEP serviu como base para o sistema operacional macOS da Apple após a aquisição da NeXT pela Apple em 1996.",
                      children: [
                        {
                          name: "OS X",
                          icon: "macos",
                          description: "OS X, abreviação de Mac OS X, sistema da qual derivou o Mac OS.",
                          children: [
                            {
                              name: "MacOS",
                              icon: "macos",
                              description: "O macOS é o sistema operacional da Apple para Macs. Lançado em 2001, é conhecido por sua interface elegante e integração com outros produtos da Apple. Oferece recursos como a Mac App Store, iCloud e Time Machine para backup. É atualizado regularmente com novos recursos e melhorias."
                            },
                            {
                              name: "iOS",
                              icon: "apple",
                              description: "O iOS é o sistema operacional desenvolvido pela Apple para dispositivos móveis, como iPhones e iPads. Lançado em 2007, ele é conhecido por sua interface intuitiva e suporte a uma ampla gama de aplicativos. O iOS oferece recursos como a App Store, iCloud para armazenamento na nuvem e integração perfeita com outros dispositivos da Apple. Ele é atualizado regularmente pela Apple para fornecer novos recursos e melhorias de desempenho aos usuários.",
                              children: [
                                {
                                  name: "iPadOS",
                                  icon: "apple",
                                  description: "O iPadOS é uma versão do sistema operacional iOS, desenvolvido pela Apple para iPads. Lançado em 2019, é otimizado para aproveitar as capacidades específicas do iPad, oferecendo recursos como multitarefa aprimorada e suporte para periféricos, como unidades USB. Ele permite uma ampla gama de tarefas, tornando o iPad uma ferramenta versátil para trabalho e entretenimento."
                                },
                                {
                                  name: "tvOS",
                                  icon: "apple",
                                  description: "O tvOS é o sistema operacional da Apple para a Apple TV, lançado em 2015. Projetado para entretenimento na tela da televisão, oferece acesso a aplicativos de streaming, jogos e mais. A Apple continua aprimorando o tvOS com atualizações regulares para melhorar a experiência do usuário na Apple TV."
                                },
                                {
                                  name: "watchOS",
                                  icon: "apple",
                                  description: "O watchOS é o sistema operacional da Apple para o Apple Watch, lançado em 2015. Ele foi projetado para oferecer uma experiência otimizada no pequeno tamanho da tela do dispositivo. Com recursos para monitorar saúde, receber notificações e instalar aplicativos, o watchOS continua sendo atualizado pela Apple para adicionar novas funcionalidades e melhorias de desempenho."
                                },
                                {
                                  name: "VisionOS",
                                  icon: "apple",
                                   description: "O visionOS é um sistema operacional de realidade mista desenvolvido pela Apple para seu headset Apple Vision Pro. Derivado do iPadOS, ele inclui frameworks específicos para realidade mista. Foi revelado em junho de 2023 e lançado em fevereiro de 2024 junto com o Apple Vision Pro."
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    },
                    {
                      name: "FreeBSD",
                      icon: "bsd",
                      description: "O FreeBSD é um sistema operacional de código aberto baseado em UNIX, conhecido por sua estabilidade e desempenho. Lançado em 1993, é amplamente utilizado em servidores e dispositivos de rede devido à sua confiabilidade. Oferece suporte a virtualização, gerenciamento de armazenamento avançado e várias arquiteturas de hardware. Mantido por uma comunidade ativa, é altamente respeitado na comunidade de código aberto."
                    }
                  ]
                },
                {
                  name: "Linux",
                  icon: "linux",
                  description: "O Linux é um sistema operacional de código aberto criado por Linus Torvalds em 1991. Conhecido pela sua estabilidade e segurança, é usado em uma variedade de dispositivos, desde computadores pessoais até servidores e supercomputadores. Sua flexibilidade e natureza de código aberto permitem que os usuários o modifiquem de acordo com suas necessidades.",
                  children: [
                      {
                          name: "Debian",
                          icon: "debian",
                          description: "O Debian é uma distribuição de sistema operacional Linux conhecida por sua estabilidade, segurança e compromisso com o software livre. Desenvolvido de forma colaborativa pela comunidade, oferece uma ampla variedade de pacotes de software e é a base para outras distribuições populares. É uma escolha comum para servidores e ambientes de desktop.",
                          children: [
                            {
                              name: "Ubuntu",
                              icon: "ubuntu",
                              description: "O Ubuntu é uma popular distribuição de sistema operacional Linux, lançada em 2004 pela Canonical Ltd. Conhecida por sua facilidade de uso, estabilidade e comunidade ativa, é utilizada em desktops, servidores e dispositivos embarcados. Inclui uma variedade de aplicativos pré-instalados e é suportada por uma ampla rede de comunidade e suporte técnico profissional."
                            },
                            {
                              name: "Android",
                              icon: "android",
                              description: "O Android é um sistema operacional móvel desenvolvido pela Google, lançado em 2008. É conhecido por sua ampla adoção em smartphones e tablets devido à sua flexibilidade, personalização e vasta biblioteca de aplicativos disponíveis na Google Play Store. Baseado no kernel do Linux, oferece recursos avançados como notificações interativas e o Google Assistant, além de integração com serviços da Google."
                            }
                          ]
                      },
                      {
                          name: "Red Hat",
                          icon: "redhat",
                          description: "O Red Hat Enterprise Linux (RHEL) é uma distribuição corporativa do sistema operacional Linux, conhecida por sua estabilidade, segurança e suporte de longo prazo. Desenvolvido pela Red Hat, é amplamente utilizado em ambientes de servidores e oferece serviços de suporte técnico e consultoria para empresas.",
                          children: [
                            {
                              name: "Fedora",
                              icon: "fedora",
                              description: "O Fedora é uma distribuição de sistema operacional Linux, desenvolvida pela comunidade e patrocinada pela Red Hat. Lançada em 2003, é conhecida por sua inovação, foco em tecnologia de ponta e compromisso com o software livre. É uma plataforma de desenvolvimento e teste para futuras tecnologias da Red Hat, adequada para uso em desktops, servidores e ambientes de nuvem."
                            }
                          ]
                      },
                      {
                        name: "WebOS",
                        icon: "linux",
                        description: "O webOS é um sistema operacional desenvolvido para dispositivos móveis, originalmente pela Palm e posteriormente adquirido pela Hewlett-Packard (HP). Focado na navegação na web e na execução de aplicativos baseados na web, apresenta uma interface intuitiva, multitarefa eficiente e integração com serviços online. Embora inicialmente usado em smartphones e tablets, também foi aplicado em smart TVs e outros dispositivos conectados."
                      }
                  ]
                },
                {
                  name: "GNU",
                  icon: "gnu",
                  description: "O GNU é um projeto de software livre lançado em 1983 por Richard Stallman. Seu objetivo era criar um sistema operacional completo e livre compatível com UNIX. Embora o núcleo do sistema, chamado GNU Hurd, não tenha sido concluído, muitas ferramentas e utilitários GNU são amplamente usados, incluindo GCC, bash e Emacs. O GNU é fundamental para o desenvolvimento do software livre e a promoção da liberdade de software.",
                  children: [
                    {
                      name: "Chrome OS",
                      icon: "chrome",
                      description: "O Chrome OS é um sistema operacional desenvolvido pelo Google, lançado em 2009, e projetado principalmente para dispositivos baseados na web, como Chromebooks e Chromeboxes. Ele é conhecido por sua simplicidade, segurança e integração com os serviços do Google. O Chrome OS é popular em educação, empresas e entre consumidores que buscam um sistema operacional leve e baseado na nuvem."
                    }
                  ]
                }
            ]
        },
        {
            name: "86-DOS",
            icon: "msDos",
            description: "O 86-DOS é um sistema operacional desenvolvido pela Seattle Computer Products em 1980. Mais tarde adquirido pela Microsoft e adaptado para criar o MS-DOS, amplamente utilizado em computadores pessoais. O 86-DOS foi uma parte crucial da história da computação, influenciando o desenvolvimento de sistemas operacionais subsequentes.",
            children: [
                {
                  name: "MS-DOS",
                  icon: "msDos",
                  description: "O MS-DOS foi um sistema operacional popular nos anos 80 e 90 para computadores pessoais. Desenvolvido pela Microsoft, usava uma interface de linha de comando onde os usuários digitavam comandos. Foi substituído por sistemas mais avançados, mas ainda influencia os sistemas operacionais modernos.",
                  children: [
                    {
                      name: "Windows",
                      icon: "windows10",
                      description: "O Windows é um sistema operacional desenvolvido pela Microsoft e lançado em 1985. É amplamente utilizado em computadores pessoais e oferece uma interface gráfica de usuário, suporte para uma variedade de aplicativos e jogos, e é conhecido por sua compatibilidade e facilidade de uso.",
                      children: [
                          {
                              name: "Windows Server",
                              icon: "windows7",
                              description: "O Windows Server é uma linha de sistemas operacionais da Microsoft, projetada para servidores e ambientes empresariais. Lançado em 2003, oferece recursos avançados de rede, armazenamento, virtualização e segurança para atender às necessidades das organizações. É usado para funções como hospedagem de sites, serviços de diretório e armazenamento em nuvem, sendo uma escolha comum para empresas em suas operações de TI.",
                          },
                          {
                              name: "Windows Phone",
                              icon: "windowsPhone",
                              description: "O Windows Phone OS foi o sistema operacional usado nos dispositivos móveis da linha Windows Phone, desenvolvidos pela Microsoft. Oferecia uma interface moderna com azulejos dinâmicos, mas foi descontinuado em 2017 junto com os dispositivos Windows Phone.",
                          }
                      ]
                    }
                  ]
                },
                {
                  name: "IBM PC DOS",
                  icon: "ibm",
                  description: "O IBM PC DOS, também conhecido como DOS, é um sistema operacional desenvolvido pela Microsoft para computadores pessoais da IBM. Lançado em 1981, foi o sistema padrão para PCs IBM e compatíveis até os anos 1990. Baseado no MS-DOS da Microsoft, foi crucial para o surgimento da computação pessoal."
                }
            ]
        }
    ]
};

const Tree = () => {
    return (
        <div className="tree">
            <ul>
                <TreeNode node={treeData} />
            </ul>
        </div>
    );
};

export default Tree;
