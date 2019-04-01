export const LOi18n = {
    sections: {
        introduction: {
            slides: {
                1: {
                    intro: 'En un futuro no muy lejano, por la falta de recursos naturales y' +
                    ' la contaminación del aire, suelo y agua del planeta tierra, se establecieron' +
                    ' colonias de seres humanos en diferentes asteroides.'
                },
                2: {
                    intro: 'En una de las búsquedas de asteroides colonizables, los' +
                    ' exploradores encontraron el asteroide XXC1.'
                },
                3: {
                    intro: 'se empezó la construcción de la primera colonia en el asteroide.' +
                    ' El primer paso, fue la construcción de un domo, bajo el cual se' +
                    ' mantendría un ambiente apto para la vida sobre la superficie del asteroide.'
                },
                4: {
                    intro1: 'El domo, estaba formado de plafones hexagonales, unidos entre sí' + 
                    ' mediante juntas selladas para garantizar la atmósfera interna. Adicionalmente,' +
                    ' estos plafones serían los responsables de manejar las condiciones de luz de la colonia.',
                    intro2: 'Para sostener cada plafón, es decir el domo, se utilizaría una estructura de' +
                    ' barras que unidas entre sí, conformarían un domo geodésico externo.'
                }
            }
        },
        scenario: {
            1: {
                exercises: {
                    1: {
                        name: 'Ejercicio 1',
                        intro1: 'En las primeras colonias, los plafones, con autonomía de vuelo, se sostenían' +
                        ' del domo geodésico exterior mediante tres cables unidos a tres puntos de la estructura.',
                        intro2: 'Pero, posteriormente se decidió, por velocidad de instalación, cambiar el sistema' +
                        ' de sujeción, conectando cada plafón a un punto de la estructura. Los plafones una vez en contacto' +
                        ' con los vecinos se unían automáticamente.',
                        statement: 'Cada uno de los plafones hexagonales, cuyo lado mide %(hexagonSide), ' +
                        'tiene una masa de %(hexagonWeight). El asteroide tiene una gravedad de %(asteroidGravity).',
                        variables: {
                            hexagonSide: {
                                tag: 'Lado plafón hexagonal'
                            },
                            hexagonWeight: {
                                tag: 'Peso plafón hexagonal'
                            },
                            asteroidGravity: {
                                tag: 'Gravedad del asteroide'
                            },
                            tieDownDistance: {
                                tag: 'Distancia del punto de sujeción'
                            }
                        },
                        questions: {
                            1: {
                                statement: 'Cual es la tensión en cada cable del plafón central si el punto de sujeción ' + 
                                'de los cables se encuentra a %(tieDownDistance)?'
                            },
                            2: {
                                statement: 'Cuáles son las componentes rectangulares de la tensión TGE de acuerdo ' +
                                'al sistema de coordenadas mostrado?'
                            },
                            3: {
                                statement: 'Cuáles son las componentes rectangulares de la tensión TGD de acuerdo ' +
                                'al sistema de coordenadas mostrado?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    },
                    2: {
                        name: 'Ejercicio 2',
                        intro1: 'una vez instalado el domo, empieza el proceso de colonización del planeta, en dos' +
                        ' sectores donde la superficie del planeta era relativamente plana. En el primer sector' +
                        ' estaban las grandes construcciones para las colonias y en el segundo sector las grandes' +
                        ' granjas para garantizar la seguridad alimentaria. En el interior del domo se mantiene una' +
                        ' gravedad artificial de 10m/s2.',
                        statement: 'En la figura se observa la estructura de la granja construida por el polímero xyz,' +
                        ' muy resistente y super liviano. Ningún elemento de la estructura es continuo y todas las uniones son' +
                        ' articuladas, para un fácil transporte y armado. La estructura se encuentra simplemente apoyada en un' +
                        ' único punto (G) y estabilizada por un cable amarrado en K y anclado en L. La granja esta automatizada' +
                        ' para garantizar las condiciones de humedad, temperatura y luz de las plantas.' +
                        ' B y C son los puntos de suministro de agua y A es uno de los dos puntos que' +
                        ' sostienen la lampara. Si la masa de la lampara es de %(lampMass) (para repartir en dos) y los' +
                        ' máximas masas que pueden haber en un momento dado en B y C es de %(maxMassBetweenBnC).' +
                        ' Recordando que la gravedad artificial de %(asteroidGravity) y si la tensión en el cable KL es' +
                        ' de %(klCableTension):',
                        variables: {
                            lampMass: {
                                tag: 'Peso de la lámpara'
                            },
                            maxMassBetweenBnC: {
                                tag: 'Máxima masa permitida entre B y C'
                            },
                            asteroidGravity: {
                                tag: 'Gravedad del asteroide'
                            },
                            klCableTension: {
                                tag: 'Tensión en el cable KL'
                            },
                            jdDistance: {
                                tag: 'Distancia entre los puntos J y D'
                            },
                            efDistance: {
                                tag: 'Distancia entre los puntos E y F'
                            },
                            abcdeklDistance: {
                                tag: 'Distancia entre los puntos AB, BC, CD, DK y KL'
                            }
                        },
                        questions: {
                            1: {
                                statement: '¿Cuál es el axial en AB?'
                            },
                            2: {
                                statement: '¿Cuál es el axial en GK?'
                            },
                            3: {
                                statement: '¿Cuál es el axial en IC?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    },
                    3: {
                        name: 'Ejercicio 3',
                        intro1: 'Para garantizar la comunicación en toda la colonia se instaló una torre de comunicación' +
                        ' localizada en la cima de una loma.',
                        statement: 'Si la tension en el cable AD es de %(adCableTension):',
                        variables: {
                            adCableTension: {
                                tag: 'Tensión en el cable AD'
                            },
                            xDistance: {
                                tag: 'Distancia OD en el eje X'
                            },
                            yDistance: {
                                tag: 'Distancia OD en el eje Y'
                            },
                            zDistance: {
                                tag: 'Distancia OA en el eje Z'
                            },
                            obDistance: {
                                tag: 'Distancia OB en el eje Y'
                            }
                        },
                        questions: {
                            1: {
                                tag: '¿Cuál es la tensión en el cable AB?'
                            },
                            2: {
                                tag: '¿Cuál es la tensión en el cable AC?'
                            },
                            3: {
                                tag: '¿Cuál es la reacción vertical en el apoyo B?'
                            }
                        },
                        btns: {
                            submit: {
                                tag: 'Responder'
                            }
                        }
                    }
                }
            }
        }
    }
};