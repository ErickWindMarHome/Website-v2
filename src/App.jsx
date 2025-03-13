import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { setLocacion, setMobileQuery, setMiddleQuery, setlenguaje, setTraffic } from './features/states/statesSlice'

// API geolocalización
import GeoRedirect from './pages/GeoRedirect/GeoRedirect'

// Páginas
const Home = lazy(() => import('./pages/Home/Home'))
const Anker = lazy(() => import('./pages/Anker/Anker'))
const None = lazy(() => import('./pages/None/None'))
const SolarPR = lazy(() => import('./pages/SolarPR/SolarPR'))
const SolarFL = lazy(() => import('./pages/SolarFL/SolarFL'))
const RoofingPR = lazy(() => import('./pages/RoofingPR/RoofingPR'))
const Careers = lazy(() => import('./pages/Careers/Careers'))
const Blogs = lazy(() => import('./pages/Blogs/Blogs'))

// Páginas english
const Home_english = lazy(() => import('./pages/Home_english/Home_english'))

// Landing Pages
const EnergiaDeLaBuena = lazy(() => import('./LP/EnergiaDeLaBuena/EnergiaDeLaBuena'))
const ArteQueIlumina = lazy(() => import('./LP/ArteQueIlumina/ArteQueIlumina'))
const Artistas = lazy(() => import('./layouts/ArteQueIlumina/Artistas'))
const CybertruckPR = lazy(() => import('./LP/CybertruckPR/CybertruckPR'))
const CybertruckRulesPR = lazy(() => import('./LP/CybertruckPR/CybertruckRulesPR'))
const Incentivos = lazy(() => import('./LP/Incentivos/Incentivos'))
const CarrersInstaller = lazy(() => import('./LP/CarrersInstaller/CarrersInstaller'))
const FuerzaDeVentas = lazy(() => import('./LP/FuerzaDeVentas/FuerzaDeVentas'))
const TecnicoDeInstalacion = lazy(() => import('./LP/TecnicoDeInstalacion/TecnicoDeInstalacion'))
const TecnicoRoofing = lazy(() => import('./LP/TecnicoRoofing/TecnicoRoofing'))
const ViveLaVidaSinRestricciones = lazy(() => import('./LP/ViveLaVidaSinInterrupciones/ViveLaVidaSinInterrupciones'))
const ReferidosTecnicos = lazy(() => import('./LP/ReferidosTecnicos/ReferidosTecnicos'))
const Tesla50K = lazy(() => import('./LP/Tesla50K/Tesla50K'))
const LearnAndWin = lazy(() => import('./LP/LearAndWin/LearAndWin'))
const LearnAndWinb = lazy(() => import('./LP/LearnAndWinb/LearnAndWinb'))
const Thanks = lazy(() => import('./LP/Thanks/Thanks'))
const Commercial = lazy(() => import('./LP/Commercial/Commercial'))
const FundacionWindmar = lazy(() => import('./LP/FundacionWindmar/FundacionWindmar'))
const Bsn = lazy(() => import('./LP/BSN/Bsn'))
const BsnReglas = lazy(() => import('./LP/BSN/BsnReglas'))
const FundacionAnker = lazy(() => import('./LP/FundacionAnker/FundacionAnker'))
const AlexPares = lazy(() => import('./LP/AlexPares/AlexPares'))
const LD_AlexPares = lazy(() => import('./LP/LD_AlexPares/LD_AlexPares'))
const KarinaBobe = lazy(() => import('./LP/KarinaBobe/KarinaBobe'))
const LD_KarinaBobe = lazy(() => import('./LP/LD_KarinaBobe/LD_KarinaBobe'))
const Huracanes = lazy(() => import('./LP/Huracanes/Huracanes'))
const HuracanesB = lazy(() => import('./LP/HuracanesB/HuracanesB'))
const RainCoat = lazy(() => import('./LP/RainCoat/RainCoat'))
const Showroom = lazy(() => import('./LP/Showroom/Showroom'))
const JorgeSerranoCareers = lazy(() => import('./LP/JorgeSerrano/JorgeSerranoCareers'))
const JorgeSerranoLeads = lazy(() => import('./LP/JorgeSerrano/JorgeSerranoLeads'))
const Misael_SaldañaLeads = lazy(() => import('./LP/Misael_Saldaña/Misael_SaldañaLeads'))
const SwichCambiate = lazy(() => import('./LP/CambiateEnergiaSolar/SwichCambiate'))
const HermanosRivera = lazy(() => import('./LP/Leads_H_Rivera/Leads_H_Rivera'))
const Reclutamiento_H_Rivera = lazy(() => import('./LP/Reclutamiento_H_Rivera/Reclutamiento_H_Rivera'))
const FirmaGana = lazy(() => import('./LP/FirmaGana/FirmaGana'))
const Consultores = lazy(() => import('./LP/Consultores/Consultores'))

// Murales Arte que ilumina
const RafaelAlgarin = lazy(() => import('./components/Murales_Arte/Rafael_Algarin/RafaelAlgarin'))
const DavidSepulveda = lazy(() => import('./components/Murales_Arte/DavidSepulveda/DavidSepulveda'))
const AlejandroRodriguez = lazy(() => import('./components/Murales_Arte/AlejandroRodriguez/AlejandroRodiguez'))
const GaBa = lazy(() => import('./components/Murales_Arte/GabrielaPatricia/GabrielaPatricia'))
const JuanP = lazy(() => import('./components/Murales_Arte/JuanPueblo/JuanPueblo'))
const CelsoGonzales = lazy(() => import('./components/Murales_Arte/CelsoGonzales/CelsoGonzales'))

const FormAcademy = lazy(() => import('./pages/FormAcademy/FormAcademy'))
const Blog = lazy(() => import('./pages/Blogs/Blog'))
const ThankYouPage_PR = lazy(() => import('./components/ThankYouPage/ThakYouPage_PR'))
const ThankYouPage_FL = lazy(() => import('./components/ThankYouPage/ThakYouPage_FL'))
const UsePageViews = lazy(() => import('./hooks/UsePageViews'))
const LearnAndWinRoofingTranslate = lazy(() => import('./LP/LearnAndWinRoofing/LearnAndWinRoofingTranslate'))
const CybertruckRulesFL = lazy(() => import('./LP/CybertruckFL/CybertruckRulesFL'))
const RoadTo50k = lazy(() => import('./LP/RoadTo50k/RoadTo50k'))
const CyberTranslate_JSD = lazy(() => import('./LP/CybertruckFL/JSD/CyberTranslate_JSD'))
const ReferidosNew = lazy(() => import('./LP/ReferidosNew/ReferidosNew'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'))
const TerminosCondiciones = lazy(() => import('./pages/TerminosCondiciones/TerminosCondiciones'))
const Roofle = lazy(() => import('./pages/Roofle/Roofle'))
const SwitchSolarEnergy = lazy(() => import('./LP/SwitchSolarEnergy/SwitchSolarEnergy'))
const Hommy = lazy(() => import('./components/Hommy/Hommy'))
const Deplaymaker = lazy(() => import('./components/Deplaymaker/Deplaymaker'))
const ReferidosEmpleados = lazy(() => import('./LP/ReferidosEmpleados/ReferidosEmpleados'))

//FormThanYouPage
const Rayitos = lazy(() => import('./LP/Rayitos/Rayitos'))
const FormCRM = lazy(() => import('./pages/FormCRM/FormCRM'))
const DealsToLeads = lazy(() => import('./pages/FormCRM/DealsToLeads'))
const AdultoMayor = lazy(() => import('./LP/AdultoMayor/AdultoMayor'))
const EnergiaQueSalva = lazy(() => import('./LP/EnergiaQueSalva/EnergiaQueSalva'))
const EdwinColon_Leads = lazy(() => import('./LP/Edwin_Colon/EdwinColon_Leads'))
const EdwinColon_Recruitment = lazy(() => import('./LP/Edwin_Colon/EdwinColon_Recruitment'))
const CareersFL = lazy(() => import('./pages/CareersFL/CareersFL'))
const Quiz = lazy(() => import('./components/Quiz/QuizList'))
const Cybertruck = lazy(() => import('./LP/CybertruckPR/Cybertruck'))
const Dilan = lazy(() => import('./LP/ConsultoresElite/ConsultoresElite'))
const Victor_Lezcano = lazy(() => import('./LP/Victor_Lezcano/Victor_Lezcano'))
const RoofingTranslate = lazy(() => import('./LP/RoofQuotingCalculator/RoofingTranslate'))
const C2C = lazy(() => import('./LP/C2c/C2c'))
const LpSolar = lazy(() => import('./LP/LpSolar/LpSolar'))
const LpRoofing = lazy(() => import('./LP/LpRoofing/LpRoofing'))
const Asistencia = lazy(() => import('./LP/Asistencia/Asistencia'))

const FormLeads_PR_CRM = lazy(() => import('./components/FormsLeads/FormsLeads_reactHookForm/FormLeads_PR_CRM'))

import useExternalScript from './hooks/useExternalScript'
import Loading from './components/Loading/Loading'

function App() {
  const dispatch = useDispatch()
  const { pathrute, Locacion, lenguaje } = useSelector((state) => state.states)
  const location = useLocation()
  const mediaQueryMobile = window.matchMedia('(max-width: 768px)')
  const listener = () => {
    dispatch(setMobileQuery(mediaQueryMobile.matches ? 'mobile' : 'desktop'))
  }
  mediaQueryMobile.addEventListener('change', listener)

  // Middle Query
  const mediaQueryMiddle = window.matchMedia('(max-width: 1024px)')
  const listenerMiddle = () => {
    dispatch(setMiddleQuery(mediaQueryMiddle.matches ? 'mobile' : 'desktopMiddle'))
  }
  mediaQueryMiddle.addEventListener('change', listenerMiddle)

  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [pathrute, location])

  useEffect(() => {
    if (!Locacion) {
      if (window.location.pathname.length > 2) {
        if (window.location.pathname.substring(1, 3) === 'fl') {
          dispatch(setLocacion('fl'))
          dispatch(setlenguaje('en'))
        } else if (window.location.pathname.substring(1, 3) === 'pr') {
          dispatch(setLocacion('pr'))
          dispatch(setlenguaje('es'))
        } else {
          dispatch(setLocacion('pr'))
          dispatch(setlenguaje('es'))
        }
      }
    }
  }, [Locacion, dispatch])

  window.addEventListener('hashchange', () => {
    console.log('se envia ruta: ', window.location.pathname + window.location.search)
  })
  window.addEventListener('load', listener)
  useEffect(() => {
    const referrer = document.referrer
    if (referrer === '') {
      dispatch(setTraffic('Direct'))
    } else {
      dispatch(setTraffic('Organic'))
    }
  }, [dispatch])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const lenguaje1 = urlParams.get('lenguaje')
    if (lenguaje1) {
      dispatch(setlenguaje(lenguaje1 === 'es' ? 'es' : 'en'))
    }
  }, [dispatch])

  useExternalScript('https://cdn.pagesense.io/js/829078526/36020b6e207c4a67aa559015e4adc1be.js', 'fl', false)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/pr/FormCrm/:id" exact element={<FormCRM />}></Route>
          <Route path="/pr/DealsToLeads/:id" exact element={<DealsToLeads />}></Route>

          {/* Rutas Homi */}
          <Route path="/asistencia" exact element={<Asistencia />}></Route>
          <Route path="/hommi" exact element={<Hommy />}></Route>
          <Route path="/hommie" exact element={<Hommy />}></Route>
          <Route path="/hommy" exact element={<Hommy />}></Route>
          <Route path="/homy" exact element={<Hommy />}></Route>
          <Route path="/homie" exact element={<Hommy />}></Route>

          {/* PR */}
          <Route path="/pr/windmar-ctc" exact element={<C2C />}></Route>
          <Route path="/pr/windmar-solar/careers" exact element={<EdwinColon_Recruitment />}></Route>
          <Route path="/pr/windmar-solar/leads" exact element={<EdwinColon_Leads />}></Route>
          <Route path="/pr/firmalo-y-pisalo-referidos" element={<Cybertruck />} />
          <Route path="/pr/farmacias-caridad" element={<FirmaGana />} />
          <Route path="/pr/anker" element={<Navigate to="/pr/anker-pr" replace />} />
          <Route path="/pr/anker-pr" exact element={<Anker />}></Route>
          <Route path="/pr/roofing" exact element={<RoofingPR />}></Route>
          <Route path="/pr/por-que-windmar" element={<Navigate to="/pr" replace />}></Route>
          <Route path="/pr/carreras" exact element={<Careers />}></Route>
          <Route
            path="/pr/solar"
            exact
            element={
              <>
                <UsePageViews pixelID="1826134724345924" />
                <SolarPR />
              </>
            }
          ></Route>
          <Route path="/pr/blogs" exact element={<Blogs />}></Route>
          <Route path="/pr/blog-2" element={<Navigate to="/pr/blogs" />}></Route>
          <Route path="/pr/blogs/:slug" exact element={<Blog />}></Route>
          <Route path="/pr/thankyoupage" exact element={<ThankYouPage_PR />}></Route>
          <Route path="/pr/referidos-empleados" exact element={<ReferidosEmpleados />}></Route>

          {/* FL */}
          <Route path="/fl/lp-solar" exact element={<LpSolar />}></Route>
          <Route path="/fl/lp-roofing" exact element={<LpRoofing />}></Route>
          <Route path="/fl/why-windmar/" element={<Navigate to="/fl" replace />}></Route>
          <Route path="/fl/careers" exact element={<CareersFL />}></Route>
          <Route path="/fl/solar" exact element={<SolarFL />}></Route>
          <Route path="/fl/blogs" exact element={<Blogs />}></Route>
          <Route path="/fl/blog-2" element={<Navigate to="/fl/blogs" />}></Route>
          <Route path="/fl/blogs/:slug" exact element={<Blog />}></Route>
          <Route path="/fl/thankyoupage" exact element={<ThankYouPage_FL />}></Route>

          {/* landing pages FL */}
          <Route path="/fl/LearnAndWin" element={<LearnAndWin />}></Route>
          <Route path="/fl/learnandwinb" element={<LearnAndWinb />}></Route>
          <Route path="/fl/vacationRoofing" element={<LearnAndWinRoofingTranslate />}></Route>
          <Route path="/fl/Thanks" element={<Thanks />}></Route>
          <Route path="/fl/switch-solar-energy" element={<SwitchSolarEnergy />}></Route>
          <Route path="/fl/roofing" element={<RoofingTranslate />}></Route>

          {/* Landing Pages */}
          <Route path="/pr/cambiate-a-energia-solar" exact element={<SwichCambiate />}></Route>
          <Route path="/pr/energia-de-la-buena" exact element={<EnergiaDeLaBuena />}></Route>
          <Route path="/pr/arte-que-ilumina" exact element={<ArteQueIlumina />}></Route>
          <Route path="/pr/arte-que-ilumina/:slug" exact element={<Artistas />}></Route>
          <Route path="/pr/incentivos" exact element={<Incentivos />}></Route>
          <Route path="/incentivo" element={<Navigate to="/pr/incentivos" />}></Route>
          <Route path="/incentivos" element={<Navigate to="/pr/incentivos" />}></Route>
          <Route path="/pr/incentivo" element={<Navigate to="/pr/incentivos" />}></Route>
          <Route path="/pr/fuerza-de-ventas" exact element={<FuerzaDeVentas />}></Route>
          <Route path="/pr/tecnico-de-instalacion" exact element={<TecnicoDeInstalacion />}></Route>
          <Route path="/pr/tecnico-de-roofing" exact element={<TecnicoRoofing />}></Route>
          <Route path="/pr/vive-la-vida-sin-interrupciones" exact element={<ViveLaVidaSinRestricciones />}></Route>
          <Route path="/pr/referidos-tecnicos" exact element={<ReferidosTecnicos />}></Route>
          <Route path="/pr/tesla50K" exact element={<Tesla50K />}></Route>
          <Route path="/pr/commercial" exact element={<Commercial />}></Route>
          <Route path="/pr/fundacion-windmar" exact element={<FundacionWindmar />}></Route>
          <Route path="/pr/fundacion-windmar/adulto-mayor-wh" exact element={<AdultoMayor />}></Route>
          <Route path="/pr/fundacion-windmar/educacion-de-la-buena" exact element={<Rayitos />}></Route>
          <Route path="/pr/fundacion-windmar/energia-que-salva-wh" exact element={<EnergiaQueSalva />}></Route>
          <Route path="/pr/bsn" exact element={<Bsn />}></Route>
          <Route path="/pr/bsnreglas" exact element={<BsnReglas />}></Route>
          <Route path="/pr/fundacionanker" exact element={<FundacionAnker />}></Route>
          <Route path="/pr/roadto50k" exact element={<RoadTo50k />}></Route>
          <Route path="/pr/firmalo-y-pisalo-x2" exact element={<FirmaGana />}></Route>
          <Route path="pr/Team-Victor-Lezcano" exact element={<Victor_Lezcano />}></Route>
          <Route path="pr/Team-Misael-Saldana-Leads" exact element={<Misael_SaldañaLeads />}></Route>
          <Route path="/pr/consultores/:id" exact element={<Consultores />}></Route>

          {/* Hermanos Rivera */}
          <Route path="/pr/leads_h_rivera" exact element={<HermanosRivera />}></Route>
          <Route path="/pr/careers_h_rivera" exact element={<Reclutamiento_H_Rivera />}></Route>
          <Route path="/pr/consultoreselite" exact element={<Dilan />}></Route>

          {/* Murales arte que ilumina */}
          <Route path="/pr/rafael_algarin" exact element={<RafaelAlgarin />}></Route>
          <Route path="/pr/david-don-rimx" exact element={<DavidSepulveda />}></Route>
          <Route path="/pr/alejandro-rodriguez" exact element={<AlejandroRodriguez />}></Route>
          <Route path="/pr/gabriela-y-patricia-urrutia" exact element={<GaBa />}></Route>
          <Route path="/pr/juan-del-pueblo" exact element={<JuanP />}></Route>
          <Route path="/pr/celso-gonzales" exact element={<CelsoGonzales />}></Route>
          <Route path="/pr/referidos" exact element={<ReferidosNew />}></Route>

          {/* FL */}
          <Route path="/fl/carrers/installer" exact element={<CarrersInstaller />}></Route>
          <Route path="/fl/formacademy" exact element={<FormAcademy />}></Route>
          <Route path="/fl/cybertruck" exact element={<CyberTranslate_JSD />}></Route>
          <Route path="/fl/cybertruckRules" exact element={<CybertruckRulesFL />}></Route>

          {/* PR */}
          <Route path="/pr/cybertuck" element={<Navigate to="/pr/cybertruck" replace />} />
          <Route path="/pr/cybertruck" element={<CybertruckPR />} />
          <Route path="/pr/cybertruck/rules" exact element={<CybertruckRulesPR />}></Route>

          {/* Landing Gerentes */}
          <Route path="/pr/energia-de-la-buena/careers" exact element={<AlexPares />}></Route>
          <Route path="/pr/energia-de-la-buena/leads" exact element={<LD_AlexPares />}></Route>
          <Route path="/pr/asesoria-de-la-buena/careers" exact element={<KarinaBobe />}></Route>
          <Route path="/pr/asesoria-de-la-buena/leads" exact element={<LD_KarinaBobe />}></Route>
          <Route path="/pr/raincoat" exact element={<RainCoat />}></Route>
          <Route path="/pr/raincoat/:client" exact element={<RainCoat />}></Route>

          {/* Huracanes */}
          <Route path="/pr/huracanes" exact element={<Huracanes />}></Route>
          <Route path="/pr/huracanesb" exact element={<HuracanesB />}></Route>
          <Route path="/fl/roofle" exact element={<Roofle />}></Route>

          {/* Terminos y condiciones */}
          <Route path="/pr/terminos-y-condiciones" exact element={<TerminosCondiciones />}></Route>
          <Route path="/fl/terms-and-conditions" exact element={<TerminosCondiciones />}></Route>

          {/* PrivacyPolicy */}
          <Route path="/pr/politica-de-privacidad" exact element={<PrivacyPolicy />}></Route>
          <Route path="/fl/privacy-policy" exact element={<PrivacyPolicy />}></Route>

          {/* Jorge Serrano */}
          <Route path="/pr/team-Jorge-Serrano-careers" exact element={<JorgeSerranoCareers />}></Route>
          <Route path="/pr/team-Jorge-Serrano-leads" exact element={<JorgeSerranoLeads />}></Route>
          <Route path="/pr/team-Jorge-Serrano-showroom" exact element={<Showroom />}></Route>

          {/* Deplaymaker */}
          <Route path="/deplaymaker" exact element={<Deplaymaker />}></Route>
          <Route path="/daplaymaker" exact element={<Deplaymaker />}></Route>
          <Route path="/playmaker" exact element={<Deplaymaker />}></Route>
          <Route path="/theplaymaker" exact element={<Deplaymaker />}></Route>

          {/* Princial Routes */}
          <Route path="/" exact element={<GeoRedirect />}></Route>
          <Route path="/pr" exact element={lenguaje === 'es' ? <Home location={'pr'} /> : <Home_english location={'pr'} />}></Route>
          <Route path="/fl" exact element={<Home location={'fl'} />}></Route>
          <Route path="*" exact element={<None />}></Route>

          <Route path="/pr/windmar-leads" exact element={<Quiz />}></Route>
          <Route path="/pr/form-pr-leads/:id" exact element={<FormLeads_PR_CRM />}></Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
