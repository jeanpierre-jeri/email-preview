import { Body, Column, Head, Html, Img, Link, Row, Section, Text, Hr } from '@react-email/components'
import * as React from 'react'

const baseUrl = 'https://img.masterbase.com/v2/1/5152/b/funciton-images/ano-2023/junio/super-cuenta-ganadores'

export default function SuperCuentaPremium() {
  return (
    <Html lang='es'>
      <Head>
        <title>Scotiabank</title>
        <link
          rel='shortcut icon'
          href='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/header/sc-favicon.png'
          type='image/x-icon'
        />
      </Head>
      <Body className='my-0 w-full' style={{ fontFamily: 'Arial' }}>
        <Section className='bg-neutral-800 max-w-[768px] mx-auto'>
          <Section className='w-[78%] mx-auto'>
            <Text className='text-end text-white my-0 text-xs py-[20px]'>
              Si no puedes ver este correo,{' '}
              <Link href='#!webview!#' target='_blank' className='text-sm text-[#0081AF] font-bold inline-block'>
                haz click aqui
              </Link>
            </Text>
          </Section>

          <Hr className='border-white border-4 w-full m-0' />

          <Section className='w-[82.3%] mx-auto'>
            <Img
              className='mt-[40px]'
              src='https://img.masterbase.com/v2/1/5152/b/funciton-images/ano-2023/marzo/adqusicion-supercuenta/logo-scotiabank.png'
            />
            <Text className='text-white text-xl my-[28px] font-normal'>Hola, #!VALOR1!# </Text>
            <Hr className='border-[#ed0722] border-[8px] w-[36px]28px] ml-0' />
            <Text className='text-3xl font-bold text-white my-[36px]'>
              ¡Ya puedes ver desde el app y la web tus opciones para ganar con la SÚPER Cuenta!
            </Text>
          </Section>

          <Img src={`${baseUrl}/hombre-adulto.png`} width={768} height={486} className='w-full h-auto' />

          <Text className='text-white w-[78%] mx-auto text-[8px]xl tex[36px]-center my-[36px] font-normal'>
            Sigue estos pasos para visualizar en la web y el app Scotiabank, tus opciones acumuladas para los sorteos
            por ahorrar en la <span className='font-bold'>SÚPER</span> Cuenta
          </Text>

          <Section className='text-center w-[72%] mx-auto'>
            <Text className='text-white text-[8px]xl [36px]-0 font-normal'>Para el sorteo del depa</Text>
            <Img
              src={`${baseUrl}/GIF-2-FNL.gif`}
              width={552}
              height={330}
              className='w-full h-auto mt-[16px] mb-[48px] rounded-[24px]'
            />

            <Text className='text-white text-[8px]xl [36px]-0 font-normal'>Para los sorteos diarios de S/ 5,000</Text>
            <Img
              src={`${baseUrl}/GIF-1-FNL.gif`}
              width={552}
              height={330}
              className='w-full h-auto mt-[16px] mb-[48px] rounded-[24px]'
            />
          </Section>

          <Section className='text-center w-[72%] mx-auto'>
            <Text className='text-white font-bold text-[8px]xl [36px]-[68%] mx-auto m-0 mb-[24px]'>
              Recuerda que, ahorrando desde S/ 1,500 o $500 participas por:
            </Text>

            <Img src={`${baseUrl}/5k-depa.png`} className='w-full h-auto' />
          </Section>
          <Text className=' font-bold text-[28px] text-center mb-0 mx-auto mt-[80px]'>
            <span className='text-white bg-[#8747BB] rounded-t-[16px] px-[28px] py-[20px] inline-block'>
              ¡Ya son más de 1,200 ganadores!
            </span>
          </Text>

          <Section className='text-white text-center py-[32px] bg-[#B0AAF6]'>
            <Text className='m-0 font-bold text-xl'>Descarga el app en:</Text>

            <Row className='mt-[20px] mb-[28px]'>
              <Column align='right'>
                <Link
                  href='https://play.google.com/store/apps/details?id=com.pe.scotiabank.clubs&pli=1'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Img
                    src='https://img.masterbase.com/v2/1/5152/b/funciton-images/ano-2023/junio/sueltas/google.png'
                    className='mr-1'
                  />
                </Link>
              </Column>

              <Column align='left'>
                <Link
                  rel='noreferrer'
                  href='https://apps.apple.com/pe/app/club-s/id1138373819?l=en&mt=8'
                  target='_blank'
                >
                  <Img
                    src='https://img.masterbase.com/v2/1/5152/b/funciton-images/ano-2023/junio/sueltas/app-store.png'
                    className='ml-1'
                  />
                </Link>
              </Column>
            </Row>

            <Text className='m-0 text-xl font-normal'>¡Y descubre cuantas opciones tienes para ganar! </Text>
          </Section>
          <Section className='bg-[#F0F1F3] py-[32px]'>
            <Row className='w-[82%]'>
              <Column className='block sm:table-cell'>
                <Img
                  className='inline-block'
                  src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/red-agencias.png'
                />

                <Text className='inline-block font-regular text-base text-[#333333] w-[56%] ml-[16px] max-w-[180px]'>
                  Conoce nuestra red de agencias{' '}
                  <Link
                    rel='noreferrer'
                    href='https://www.scotiabank.com.pe/Personas/agencias'
                    target='_blank'
                    className='font-bold text-[#008FCB]'
                  >
                    aquí
                  </Link>
                </Text>
              </Column>

              <Column className='block sm:table-cell'>
                <Img
                  className='inline-block'
                  src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/red-cajeros.png'
                />

                <Text className='inline-block font-regular text-base text-[#333333] w-[56%] ml-[16px] max-w-[180px]'>
                  Conoce nuestra red de cajeros{' '}
                  <Link
                    rel='noreferrer'
                    href='https://www.scotiabank.com.pe/Acerca-de/servicios-bancarios/cajeros-automaticos'
                    target='_blank'
                    className='font-bold text-[#008FCB]'
                  >
                    aquí
                  </Link>
                </Text>
              </Column>
            </Row>
            <Row className='w-[82%] h-px bg-[#e5e5e5] mx-auto mt-[16px]'>
              <span />
            </Row>

            <Row className='w-[82%] mx-auto mt-[48px]'>
              <Column className='align-top block sm:table-cell'>
                <Text className='m-0 text-base'>Visítanos</Text>
                <Link
                  rel='noreferrer'
                  href='https://www.scotiabank.com.pe/'
                  target='_blank'
                  className='font-bold text-base'
                >
                  scotiabank.com.pe
                </Link>
              </Column>

              <Column className='align-top block sm:table-cell mt-[16px] sm:mt-0'>
                <Text className='m-0 text-base'>Llámanos al</Text>

                <Row>
                  <Column>
                    <Text className='m-0 text-lg'>
                      <Link href='tel:013116000' className='text-[#333]'>
                        01-311-6000
                      </Link>
                      <span className='block text-sm'>Lima</span>
                    </Text>
                  </Column>

                  <Column>
                    <Text className='m-0 text-lg'>
                      <Link href='tel:080116000' className='text-[#333]'>
                        0-801-1-6000
                      </Link>
                      <span className='block text-sm'>Provincia</span>
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section className='bg-white'>
            <Hr className='border-[#ed0722] border-8 mt-[48px] mb-[20px]' />

            <Row className='px-[20px]'>
              <Column className='block sm:table-cell'>
                <Row>
                  <Column>
                    <Text className='inline-block m-0 text-base'>Síguenos en:</Text>
                  </Column>

                  <Column>
                    <Img
                      src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-facebook.png'
                      className='inline-block ml-[16px]'
                    />
                    <Img
                      src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-instagram.png'
                      className='inline-block ml-[16px]'
                    />
                    <Img
                      src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-twitter.png'
                      className='inline-block ml-[16px]'
                    />
                    <Img
                      src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-linkedin.png'
                      className='inline-block ml-[16px]'
                    />
                  </Column>
                </Row>
              </Column>

              <Column className='block sm:table-cell mt-[16px] sm:mt-0'>
                <Row>
                  <Column>
                    <Text className='m-0 text-base inline-block'>Descarga el App en: </Text>
                  </Column>

                  <Column>
                    <Link
                      rel='noreferrer'
                      href='https://play.google.com/store/apps/details?id=com.pe.scotiabank.clubs&pli=1'
                      target='_blank'
                      className='inline-block ml-[8px]'
                    >
                      <Img
                        src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-googleplay-prov.png'
                        className=' inline-block'
                      />
                    </Link>
                    <Link
                      rel='noreferrer'
                      href='https://apps.apple.com/pe/app/club-s/id1138373819?l=en&mt=8'
                      target='_blank'
                      className='inline-block ml-[8px]'
                    >
                      <Img
                        src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/icono-appstore-prov.png'
                        className=' inline-block'
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section className='bg-white pt-[16px] px-[20px]'>
            <Img src='https://imgsslscl.masterbase.com/v1/scotiabankmktpe/b/funciton-images/footer/sello-compromiso.png' />

            <Hr className='border-[#383636] border mt-[32px] mb-[16px]' />

            <Row>
              <Column className='block sm:table-cell'>
                <Img src={`${baseUrl}/pastilla-super-cuenta.png`} className='mr-[28px]' />
              </Column>
              <Column className='block sm:table-cell'>
                <Text className='text-black text-[9px] leading-tight'>
                  <span className='font-semibold'>Súper Cuenta de Scotiabank:</span> TREAs referenciales. Para una
                  cuenta con saldo promedio mensual de S/ 1,500 sin movimientos durante 12 meses aplica una TREA de
                  0.25%. Interés anual de S/ 3.75. Saldo mínimo de equilibrio S/ 1,500.
                </Text>
              </Column>
            </Row>

            <Text className='text-black text-[9px] leading-tight mt-0 sm:mt-[28px] mb-[24px] text-justify'>
              <span className='font-semibold'>Súper Cuenta de Scotiabank:</span> Cuenta de ahorros para personas
              naturales. Sorteos diarios de S/5,000: Del 01/01/2023 al 31/12/23. Participan clientes con Súper Cuenta y
              con un saldo desde S/ 1,500 o US$ 500 el día hábil previo a la fecha del sorteo, así como el mismo día del
              sorteo. El cliente acumulará 1 opción por cada S/ 1 o 4 opciones por cada US$ 1 que tenga de saldo el día
              hábil previo a la fecha del sorteo. Se realizará un sorteo por día durante la vigencia de la campaña. Por
              cada sorteo se escogerá un ganador de un premio de S/ 5,000; los cuales podrán ser abonados en la cuenta
              con la que el ganador participó del sorteo, siempre que el ganador haya suscrito el acta de recepción de
              premio correspondiente. El cliente podrá ganar el premio de los S/5,000 una vez por mes. El ganador del
              sorteo será publicado en la web pública de Scotiabank Clic Aquí o podrá ser consultado en nuestra banca
              por teléfono o cualquiera de nuestras agencias a nivel nacional. El banco se comunicará con el cliente
              ganador al correo electrónico o hasta en 2 oportunidades al número de teléfono registrado en el banco, de
              no tener respuesta por parte del cliente ganador, éste tendrá un plazo de 90 días calendario para reclamar
              el premio, contados desde la fecha del sorteo. Transcurrido el plazo antes indicado sin que el cliente
              gestione la entrega del premio y suscriba el acta de recepción correspondiente, se perderá el derecho a
              este. Sorteo de un departamento de estreno: Para participar, el cliente debe tener su Súper Cuenta y haber
              tenido un saldo promedio mensual desde S/ 1,500 o US$ 500 el mes previo a la fecha del sorteo, así como el
              mismo día del sorteo. El cliente acumulará opciones con un saldo promedio mensual desde S/ 1,500 o US$500,
              se considera el saldo promedio mensual de los tres meses anteriores al mes del sorteo. Los clientes que
              abran su Súper Cuenta entre el 1 y 9 de agosto de 2023, entran al sorteo si mantienen un saldo desde S/
              1,500 o US$ 500 hasta el día del sorteo. El cliente acumulará 1 opción por cada S/ 1 o 4 opciones por cada
              US$ 1. Próximo sorteo: 10/08/2023. No participan colaboradores de Scotiabank. El cliente ganador podrá
              escoger el departamento de estreno en uno de los proyectos inmobiliarios desarrollados por Edifica. El
              ganador del sorteo será publicado en la web pública de Scotiabank Clic Aquí o podrá ser consultado en
              nuestra banca por teléfono o cualquiera de nuestras agencias a nivel nacional. Para realizar la entrega
              del premio, el cliente deberá tener su Súper Cuenta activa. El Banco declara expresamente que actúa como
              intermediario, por lo que no tendrá responsabilidad legal por daños o perjuicios derivados de la idoneidad
              de los productos o servicios ofrecidos por las empresas que participan en la presente campaña. Depósitos
              cubiertos por el Fondo de Seguro de Depósitos hasta por S/125,714.00 para el periodo Marzo 2023 - Mayo
              2023. Más información en www.fsd.org.pe. ITF 0.005%. Para más información sobre tasas, comisiones, gastos,
              y demás condiciones, consulte el tarifario en la red de agencias Scotiabank o en www.scotiabank.com.pe.
              Toda referencia a SCOTIA o Scotiabank se refiere a Scotiabank Perú S.A.A. ®Marca registrada de The Bank of
              Nova Scotia.
            </Text>

            <Hr className='border-[#383636] border m-0' />

            <Text className='text-black text-[9px] mb-0 mt-[12px] leading-tight text-justify'>
              Por tu seguridad, en nuestras comunicaciones no incluiremos links a otras páginas, con excepción de las
              siguientes direcciones: www.scotiabank.com.pe, www.facebook/ScotiabankPE, incluyendo sus subdominios. No
              solicitaremos tus datos personales o información de tus cuentas. Nuestros correos siempre serán
              personalizados con tu nombre. La omisión de vocales con tilde, letra “ñ” o el cambio por otros caracteres
              se debe a la configuración del servidor de tu correo electrónico o a la versión de tu navegador. Toda
              información en este mensaje es con fines de negocio, confidencial y de uso exclusivo de Scotiabank.
              Información enviada de conformidad con la legislación sobre correo electrónico comercial no solicitado –
              SPAM según Ley N° 28493. Si no deseas recibir estos correos electrónicos te agradeceremos enviar un correo
              a: desafiliacionemails@scotiabank.com.pe (sin espacios). Este correo electrónico fue enviado por
              Scotiabank Perú S.A.A. Av. Dionisio Derteano 102, San Isidro, Lima, Perú. © 2021 Derechos Reservados.
              Correo Institucional de SCOTIABANK PERÚ S.A.A.
            </Text>

            <Text className='text-[#212121] text-center mb-[8px] mt-[36px] text-[9.5px] leading-tight'>
              Este correo fue enviado a: #!email!#
            </Text>

            <Text className='text-[#212121] text-center mt-0 text-[9.5px] leading-tight mb-[36px]'>
              2023 - Copyright &#169;{' '}
              <Link
                rel='noreferrer'
                href='https://www.scotiabank.com.pe'
                target='_blank'
                className='text-[#9400BF] font-bold'
              >
                Scotiabank.com.pe
              </Link>{' '}
              con todos los derechos reservados.
            </Text>
          </Section>
        </Section>
      </Body>
    </Html>
  )
}
