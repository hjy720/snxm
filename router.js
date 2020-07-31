import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../components/Index/Index.vue";
import CompanyContent from "../components/other/CompanyContent/CompanyContent.vue";
import intro from "../components/other/intro/intro.vue";
import BusinessScope from "../components/other/BusinessScope/BusinessScope.vue";
import se812 from "../components/products/NitrogenBlows/se812.vue";
import se606 from "../components/products/NitrogenBlows/se606.vue";
import se506 from "../components/products/NitrogenBlows/se506.vue";
import wl00 from "../components/products/wl00/wl00/wl00.vue";
import vacuumsystem_SV from "../components/products/\/vacuumsystem_SV/vacuumsystem_SV/vacuumsystem_SV.vue";
import products from "../components/products/products/products.vue";
import oilPumps from "../components/VariousPumps/oilPumps.vue";
import dryPumpAssembly from "../components/VariousPumps/dryPumpAssembly.vue";
import GasStandard from "../components/products/GasStandard/GasStandard.vue";
import MaterialInstallation from "../components/products/GasStandard/MaterialInstallation.vue";
import Extractor from "../components/products/wl00/Extractor/Extractor.vue";
import MicroConcen from "../components/products/wl00/MicroConcen/MicroConcen.vue";
import MicroColdTrap from "../components/products/wl00/MicroColdTrap/MicroColdTrap.vue";
import Purge from "../components/products/wl00/Purge/Purge.vue";
import ThermalDesorption from "../components/products/wl00/ThermalDesorption/ThermalDesorption.vue";
import lowTemperature from "../components/products/wl00/lowTemperature/lowTemperature.vue";
import ControlSystem from "../components/products/wl00/ControlSystem/ControlSystem.vue";
import highVacuum from "../components/products/vacuumsystem_SV/highVacuum/highVacuum.vue";
import system from "../components/products/vacuumsystem_SV/system/system.vue";
import VacuumProducts from "../components/products/VacuumProducts/VacuumProducts.vue";
import edwards_rv from "../components/products/VacuumProducts/edwards_rv/edwards_rv/edwards_rv.vue";
import VacuumPumpSize from "../components/products/VacuumProducts/edwards_rv/VacuumPumpSize/VacuumPumpSize.vue";
import edwards_em from "../components/products/VacuumProducts/edwards_em/edwards_em.vue";
import edwards_turbo_pump from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_pump/edwards_turbo_pump.vue";
import edwards_turbo_ext from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext.vue";
/*---------------75dx------------*/
import edwards_turbo_ext75dx from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext75dx/edwards_turbo_ext75dx.vue";
import edwards_turbo_ext75dx_d from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext75dx/edwards_turbo_ext75dx_d/edwards_turbo_ext75dx_d.vue";
import edwards_turbo_ext75dx_p from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext75dx/edwards_turbo_ext75dx_p/edwards_turbo_ext75dx_p.vue";
/*------------------255dx---------------*/
import edwards_turbo_ext255dx from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext255dx/edwards_turbo_ext255dx.vue";
import edwards_turbo_ext255dx_d from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext255dx/edwards_turbo_ext255dx_d/edwards_turbo_ext255dx_d.vue";
import edwards_turbo_ext255dx_p from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext255dx/edwards_turbo_ext255dx_p/edwards_turbo_ext255dx_p.vue";
/*------------------edwards_fluid---------------*/
import edwards_fluid from "../components/products/VacuumProducts/edwards_fluid/edwards_fluid.vue";
/*------------------406px---------------*/
import edwards_turbo_ext406px from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext406px/edwards_turbo_ext406px/edwards_turbo_ext406px.vue";
import edwards_turbo_ext406px_d from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext406px/edwards_turbo_ext406px_d/edwards_turbo_ext406px_d.vue";
import edwards_turbo_ext406px_p from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext406px/edwards_turbo_ext406px_p/edwards_turbo_ext406px_p.vue";
/*------------------556h---------------*/
import edwards_turbo_ext556h from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext556h/edwards_turbo_ext556h/edwards_turbo_ext556h.vue";
/*-----------ext70-------------*/
import edwards_turbo_ext70 from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext70/edwards_turbo_ext70/edwards_turbo_ext70.vue";
import edwards_turbo_ext70_d from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext70/edwards_turbo_ext70_d/edwards_turbo_ext70_d.vue";
import edwards_turbo_ext70_p from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ext/edwards_turbo_ext70/edwards_turbo_ext70_p/edwards_turbo_ext70_p.vue";
/*-----------edwards_turbo_stations-------------*/
import edwards_turbo_stations from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_stations/edwards_turbo_stations.vue";
import edwards_turbo_stationsm from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_stations/edwards_turbo_stationsm/edwards_turbo_stationsm.vue";
/*-----------edwards_turbo_ts75-------------*/
import edwards_turbo_ts75 from "../components/products/VacuumProducts/edwards_turbo_pump/edwards_turbo_ts75/edwards_turbo_ts75.vue";
/*-----------edwards_XDD1-------------*/
import edwards_XDD1 from '../components/products/VacuumProducts/edwards_XDD1/edwards_XDD1.vue';
/*-----------edwards_D_LAB-------------*/
import edwards_D_LAB from '../components/products/VacuumProducts/edwards_D-LAB/edwards_D-LAB.vue';
import MolecularPump from '../components/VariousPumps/MolecularPump.vue';
import GammaPump from '../components/VariousPumps/GammaPump.vue';
import IndustrialPumps from '../components/VariousPumps/IndustrialPumps.vue';
/*-----------small_pump_accessories-------------*/
import small_pump_accessories from '../components/products/VacuumProducts/small_pump_accessories/small_pump_accessories.vue';
import small_pump_mist from '../components/products/VacuumProducts/small_pump_accessories/small_pump_mist.vue';
import small_pump_return from '../components/products/VacuumProducts/small_pump_accessories/small_pump_return.vue';
import small_pump_liquid from '../components/products/VacuumProducts/small_pump_accessories/small_pump_liquid.vue';
import small_pump_ito20k from '../components/products/VacuumProducts/small_pump_accessories/small_pump_ito20k.vue';
import small_pump_itc20k from '../components/products/VacuumProducts/small_pump_accessories/small_pump_itc20k.vue';
import small_pump_itf20k from '../components/products/VacuumProducts/small_pump_accessories/small_pump_itf20k.vue';
import small_pump_fl20k from '../components/products/VacuumProducts/small_pump_accessories/small_pump_fl20k.vue';
import small_pump_vibration from '../components/products/VacuumProducts/small_pump_accessories/small_pump_vibration.vue';
import small_pump_drain from '../components/products/VacuumProducts/small_pump_accessories/small_pump_drain.vue';
import small_pump_ob20 from '../components/products/VacuumProducts/small_pump_accessories/small_pump_ob20.vue';
import small_pump_tag from '../components/products/VacuumProducts/small_pump_accessories/small_pump_tag.vue';
import small_pump_ebv20 from '../components/products/VacuumProducts/small_pump_accessories/small_pump_ebv20.vue';
import small_pump_water from '../components/products/VacuumProducts/small_pump_accessories/small_pump_water.vue';
/*-----------edwards_gauge-------------*/
import edwards_gauge from '../components/products/VacuumProducts/edwards_gauge/edwards_gauge.vue';
/*-----------edwards_controller-------------*/
import edwards_controller from '../components/products/VacuumProducts/edwards_controller/edwards_controller.vue';
/*-----------edwards_oil-------------*/
import edwards_oil from '../components/products/VacuumProducts/edwards_oil/edwards_oil.vue';
/*-----------VacuumProduction-------------*/
import VacuumProduction from '../components/products/VacuumProduction/VacuumProduction.vue';
import nim_vacuum from '../components/products/VacuumProduction/nim_vacuum/nim_vacuum.vue';
import vacuum_peijian from '../components/products/VacuumProduction/vacuum_peijian/vacuum_peijian.vue';
/*-----------ExperimentalEquipment-------------*/
import ExperimentalEquipment from '../components/products/ExperimentalEquipment/ExperimentalEquipment.vue';
/*-----------GPC-------------*/
import GPC from '../components/products/ExperimentalEquipment/GPC/GPC.vue';
/*-----------ks-------------*/
import ks from '../components/products/ExperimentalEquipment/ks/ks.vue';
/*-----------VacuumFitting-------------*/
import VacuumFitting from '../components/products/VacuumFitting/VacuumFitting.vue';
import parts from '../components/products/VacuumFitting/parts/parts.vue';
/*-----------techService-------------*/
import techService from '../components/techService/techService.vue';
import vacuumBump from '../components/techService/vacuumBump/vacuumBump.vue';
import msService from '../components/techService/msService/msService.vue';
import qtService from '../components/techService/qtService/qtService.vue';
import metrology from '../components/techService/metrology/metrology.vue';
/*-----------bbs-------------*/
import bbs from '../components/bbs/bbs.vue';
import bbs_show from '../components/bbs/bbs_show/bbs_show.vue';
import bbs_sw from '../components/bbs/bbs_show/bbs_sw.vue';
import bbs_shw from '../components/bbs/bbs_show/bbs_shw.vue';
import bbs_fayan from '../components/bbs/bbs_fayan/bbs_fayan.vue';
import bbs_huifu from '../components/bbs/bbs_huifu/bbs_huifu.vue';
/*-----------informations-------------*/
import informations from '../components/informations/informations.vue';
/*-----------contact-------------*/
import contact from '../components/other/contact/contact.vue';
/*-----------detech-------------*/
import detech from '../components/products/detech/detech.vue';
import detech_agilent from '../components/products/detech/detech_agilent/detech_agilent.vue';
import detech_thermo from '../components/products/detech/detech_thermo/detech_thermo.vue';
import detech_pe from '../components/products/detech/detech_pe/detech_pe.vue';
import detech_varian from '../components/products/detech/detech_varian/detech_varian.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
            path: "/",
            redirect: "/App"
        },
        {
            path: "/App",
            component: Index
        },
        {
            path: "/Index",
            component: Index,
            redirect: "/Index",
            children: [{
                path: "/Index",
                component: Index
            }]
        },
        {
            path: "/other/CompanyContent",
            component: CompanyContent,
            redirect: "/other/CompanyContent",
            children: [{
                path: "/CompanyContent",
                component: CompanyContent
            }]
        },
        {
            path: "/other/intro",
            component: intro,
            redirect: "/other/intro",
            children: [{
                path: "/other/intro",
                component: intro
            }]
        },
        {
            path: "/other/BusinessScope",
            component: BusinessScope,
            redirect: "/other/BusinessScope",
            children: [{
                path: "/other/BusinessScope",
                component: BusinessScope
            }]
        },
        {
            path: "/products/se812",
            component: se812,
            redirect: "/products/se812",
            children: [{
                path: "/products/se812",
                component: se812
            }]
        },
        {
            path: "/products/se606",
            component: se606,
            redirect: "/products/se606",
            children: [{
                path: "/products/se606",
                component: se606
            }]
        }, {
            path: "/products/MolecularPump",
            component: MolecularPump,
            redirect: "/products/MolecularPump",
            children: [{
                path: "/products/MolecularPump",
                component: MolecularPump
            }]
        },
        {
            path: "/products/se506",
            component: se506,
            redirect: "/products/se506",
            children: [{
                path: "/products/se506",
                component: se506
            }]
        },
        {
            path: "/products/wl00",
            component: wl00,
            redirect: "/products/wl00",
            children: [{
                path: "/products/wl00",
                component: wl00
            }]
        },
        {
            path: "/products/vacuumsystem_SV",
            component: vacuumsystem_SV,
            redirect: "/products/vacuumsystem_SV",
            children: [{
                path: "/products/vacuumsystem_SV",
                component: vacuumsystem_SV
            }]
        },
        {
            path: "/products/VacuumProducts",
            component: VacuumProducts,
            redirect: "/products/VacuumProducts",
            children: [{
                path: "/products/VacuumProducts",
                component: VacuumProducts
            }]
        }, {
            path: "/products/GammaPump",
            component: GammaPump,
            redirect: "/products/GammaPump",
            children: [{
                path: "/products/GammaPump",
                component: GammaPump
            }]
        }, {
            path: "/products/IndustrialPumps",
            component: IndustrialPumps,
            redirect: "/products/IndustrialPumps",
            children: [{
                path: "/products/IndustrialPumps",
                component: IndustrialPumps
            }]
        }, {
            path: "/products/edwards_gauge",
            component: edwards_gauge,
            redirect: "/products/edwards_gauge",
            children: [{
                path: "/products/edwards_gauge",
                component: edwards_gauge
            }]
        }, {
            path: "/products/edwards_controller",
            component: edwards_controller,
            redirect: "/products/edwards_controller",
            children: [{
                path: "/products/edwards_controller",
                component: edwards_controller
            }]
        }, {
            path: "/products/edwards_oil",
            component: edwards_oil,
            redirect: "/products/edwards_oil",
            children: [{
                path: "/products/edwards_oil",
                component: edwards_oil
            }]
        }, {
            path: "/products/VacuumProduction",
            component: VacuumProduction,
            redirect: "/products/VacuumProduction",
            children: [{
                path: "/products/VacuumProduction",
                component: VacuumProduction
            }]
        }, {
            path: "/products/ExperimentalEquipment",
            component: ExperimentalEquipment,
            redirect: "/products/ExperimentalEquipment",
            children: [{
                path: "/products/ExperimentalEquipment",
                component: ExperimentalEquipment
            }]
        }, {
            path: "/techService/techService",
            component: techService,
            redirect: "/techService/techService",
            children: [{
                path: "/techService/techService",
                component: techService
            }]
        },
        /*-----------detech-------------*/
        {
            path: "/products/detech",
            component: detech,
            redirect: "/products/detech",
            children: [{
                path: "/products/detech",
                component: detech
            }]
        },
        {
            path: "/products/detech_agilent",
            component: detech_agilent,
            redirect: "/products/detech_agilent",
            children: [{
                path: "/products/detech_agilent",
                component: detech_agilent
            }]
        }, {
            path: "/products/detech_thermo",
            component: detech_thermo,
            redirect: "/products/detech_thermo",
            children: [{
                path: "/products/detech_thermo",
                component: detech_thermo
            }]
        }, {
            path: "/products/detech_pe",
            component: detech_pe,
            redirect: "/products/detech_pe",
            children: [{
                path: "/products/detech_pe",
                component: detech_pe
            }]
        }, {
            path: "/products/detech_varian",
            component: detech_varian,
            redirect: "/products/detech_varian",
            children: [{
                path: "/products/detech_varian",
                component: detech_varian
            }]
        },
        /*-----------VacuumFitting-------------*/
        {
            path: "/products/VacuumFitting",
            component: VacuumFitting,
            redirect: "/products/VacuumFitting",
            children: [{
                path: "/products/VacuumFitting",
                component: VacuumFitting
            }]
        },
        /*-----------bbs-------------*/
        {
            path: "/bbs/bbs",
            component: bbs,
            redirect: "/bbs/bbs",
            children: [{
                path: "/bbs/bbs",
                component: bbs
            }]
        }, {
            path: "/bbs/bbs_show",
            component: bbs_show,
            redirect: "/bbs/bbs_show",
            children: [{
                path: "/bbs/bbs_show",
                component: bbs_show
            }]
        },
        /*-----------informations-------------*/
        {
            path: "/informations/informations",
            component: informations,
            redirect: "/informations/informations",
            children: [{
                path: "/informations/informations",
                component: informations
            }]
        },
        /*-----------contact-------------*/
        {
            path: "/other/contact",
            component: contact,
            redirect: "/other/contact",
            children: [{
                path: "/other/contact",
                component: contact
            }]
        },
        /*--------------------子组件-----------------------*/
        {
            path: "/products",
            component: products,
            redirect: "/products",
            children: [{
                path: "/products",
                component: products,
                name: "products"
            }]
        },
        {
            path: "/products/oilPumps",
            component: oilPumps,
            redirect: "/products/oilPumps",
            children: [{
                path: "/products/oilPumps",
                component: oilPumps,
                name: "oilPumps"
            }]
        },
        {
            path: "/products/dryPumpAssembly",
            component: dryPumpAssembly,
            redirect: "/products/dryPumpAssembly",
            children: [{
                path: "/products/dryPumpAssembly",
                component: dryPumpAssembly,
                name: "dryPumpAssembly"
            }]
        },
        {
            path: "/products/GasStandard",
            component: GasStandard,
            redirect: "/products/GasStandard",
            children: [{
                path: "/products/GasStandard",
                component: GasStandard,
                name: "GasStandard"
            }]
        },
        {
            path: "/products/MaterialInstallation",
            component: MaterialInstallation,
            redirect: "/products/MaterialInstallation",
            children: [{
                path: "/products/MaterialInstallation",
                component: MaterialInstallation,
                name: "MaterialInstallation"
            }]
        },
        {
            path: "/products/Extractor",
            component: Extractor,
            redirect: "/products/Extractor",
            children: [{
                path: "/products/Extractor",
                component: Extractor,
                name: "Extractor"
            }]
        },
        {
            path: "/products/MicroConcen",
            component: MicroConcen,
            redirect: "/products/MicroConcen",
            children: [{
                path: "/products/MicroConcen",
                component: MicroConcen,
                name: "MicroConcen"
            }]
        },
        {
            path: "/products/MicroColdTrap",
            component: MicroColdTrap,
            redirect: "/products/MicroColdTrap",
            children: [{
                path: "/products/MicroColdTrap",
                component: MicroColdTrap,
                name: "MicroColdTrap"
            }]
        },
        {
            path: "/products/Purge",
            component: Purge,
            redirect: "/products/Purge",
            children: [{
                path: "/products/Purge",
                component: Purge,
                name: "Purge"
            }]
        },
        {
            path: "/products/ThermalDesorption",
            component: ThermalDesorption,
            redirect: "/products/ThermalDesorption",
            children: [{
                path: "/products/ThermalDesorption",
                component: ThermalDesorption,
                name: "ThermalDesorption"
            }]
        },
        {
            path: "/products/lowTemperature",
            component: lowTemperature,
            redirect: "/products/lowTemperature",
            children: [{
                path: "/products/lowTemperature",
                component: lowTemperature,
                name: "lowTemperature"
            }]
        },
        {
            path: "/products/ControlSystem",
            component: ControlSystem,
            redirect: "/products/ControlSystem",
            children: [{
                path: "/products/ControlSystem",
                component: ControlSystem,
                name: "ControlSystem"
            }]
        },
        {
            path: "/products/highVacuum",
            component: highVacuum,
            redirect: "/products/highVacuum",
            children: [{
                path: "/products/highVacuum",
                component: highVacuum,
                name: "highVacuum"
            }]
        },
        {
            path: "/products/system",
            component: system,
            redirect: "/products/system",
            children: [{
                path: "/products/system",
                component: system,
                name: "system"
            }]
        },
        {
            path: "/products/edwards_rv",
            component: edwards_rv,
            redirect: "/products/edwards_rv",
            children: [{
                path: "/products/edwards_rv",
                component: edwards_rv,
                name: "edwards_rv"
            }]
        },
        {
            path: "/products/VacuumPumpSize",
            component: VacuumPumpSize,
            redirect: "/products/VacuumPumpSize",
            children: [{
                path: "/products/VacuumPumpSize",
                component: VacuumPumpSize,
                name: "VacuumPumpSize"
            }]
        },
        {
            path: "/products/edwards_em",
            component: edwards_em,
            redirect: "/products/edwards_em",
            children: [{
                path: "/products/edwards_em",
                component: edwards_em,
                name: "edwards_em"
            }]
        },
        {
            path: "/products/edwards_turbo_pump",
            component: edwards_turbo_pump,
            redirect: "/products/edwards_turbo_pump",
            children: [{
                path: "/products/edwards_turbo_pump",
                component: edwards_turbo_pump,
                name: "edwards_turbo_pump"
            }]
        },
        {
            path: "/products/edwards_turbo_ext",
            component: edwards_turbo_ext,
            redirect: "/products/edwards_turbo_ext",
            children: [{
                path: "/products/edwards_turbo_ext",
                component: edwards_turbo_ext,
                name: "edwards_turbo_ext"
            }]
        },
        /*-----------edwards_fluid-------------*/
        {
            path: "/products/edwards_fluid",
            component: edwards_fluid,
            redirect: "/products/edwards_fluid",
            children: [{
                path: "/products/edwards_fluid",
                component: edwards_fluid,
                name: "edwards_fluid"
            }]
        },
        /*-----------75dx-------------*/
        {
            path: "/products/edwards_turbo_ext75dx",
            component: edwards_turbo_ext75dx,
            redirect: "/products/edwards_turbo_ext75dx",
            children: [{
                path: "/products/edwards_turbo_ext75dx",
                component: edwards_turbo_ext75dx,
                name: "edwards_turbo_ext75dx"
            }]
        },
        {
            path: "/products/edwards_turbo_ext75dx_d",
            component: edwards_turbo_ext75dx_d,
            redirect: "/products/edwards_turbo_ext75dx_d",
            children: [{
                path: "/products/edwards_turbo_ext75dx_d",
                component: edwards_turbo_ext75dx_d,
                name: "edwards_turbo_ext75dx_d"
            }]
        },
        {
            path: "/products/edwards_turbo_ext75dx_p",
            component: edwards_turbo_ext75dx_p,
            redirect: "/products/edwards_turbo_ext75dx_p",
            children: [{
                path: "/products/edwards_turbo_ext75dx_p",
                component: edwards_turbo_ext75dx_p,
                name: "edwards_turbo_ext75dx_p"
            }]
        },
        /*-----------255dx-------------*/
        {
            path: "/edwards_turbo_ext255dx",
            component: edwards_turbo_ext255dx,
            redirect: "/products/edwards_turbo_ext255dx",
            children: [{
                path: "/products/edwards_turbo_ext255dx",
                component: edwards_turbo_ext255dx,
                name: "edwards_turbo_ext255dx"
            }]
        },
        {
            path: "/edwards_turbo_ext255dx_d",
            component: edwards_turbo_ext255dx_d,
            redirect: "/products/edwards_turbo_ext255dx_d",
            children: [{
                path: "/products/edwards_turbo_ext255dx_d",
                component: edwards_turbo_ext255dx_d,
                name: "edwards_turbo_ext255dx_d"
            }]
        },
        {
            path: "/products/edwards_turbo_ext255dx_p",
            component: edwards_turbo_ext255dx_p,
            redirect: "/products/edwards_turbo_ext255dx_p",
            children: [{
                path: "/products/edwards_turbo_ext255dx_p",
                component: edwards_turbo_ext255dx_p,
                name: "edwards_turbo_ext255dx_p"
            }]
        },
        /*-----------406px-------------*/
        {
            path: "/products/edwards_turbo_ext406px",
            component: edwards_turbo_ext406px,
            redirect: "/products/edwards_turbo_ext406px",
            children: [{
                path: "/products/edwards_turbo_ext406px",
                component: edwards_turbo_ext406px,
                name: "edwards_turbo_ext406px"
            }]
        },
        {
            path: "/products/edwards_turbo_ext406px_d",
            component: edwards_turbo_ext406px_d,
            redirect: "/products/edwards_turbo_ext406px_d",
            children: [{
                path: "/products/edwards_turbo_ext406px_d",
                component: edwards_turbo_ext406px_d,
                name: "edwards_turbo_ext406px_d"
            }]
        },
        {
            path: "/products/edwards_turbo_ext406px_p",
            component: edwards_turbo_ext406px_p,
            redirect: "/products/edwards_turbo_ext406px_p",
            children: [{
                path: "/products/edwards_turbo_ext406px_p",
                component: edwards_turbo_ext406px_p,
                name: "edwards_turbo_ext406px_p"
            }]
        },
        /*-----------556h-------------*/
        {
            path: "/products/edwards_turbo_ext556h",
            component: edwards_turbo_ext556h,
            redirect: "/products/edwards_turbo_ext556h",
            children: [{
                path: "/products/edwards_turbo_ext556h",
                component: edwards_turbo_ext556h,
                name: "edwards_turbo_ext556h"
            }]
        },
        /*-----------ext70-------------*/
        {
            path: "/products/edwards_turbo_ext70",
            component: edwards_turbo_ext70,
            redirect: "/products/edwards_turbo_ext70",
            children: [{
                path: "/products/edwards_turbo_ext70",
                component: edwards_turbo_ext70,
                name: "edwards_turbo_ext70"
            }]
        },
        {
            path: "/products/edwards_turbo_ext70_d",
            component: edwards_turbo_ext70_d,
            redirect: "/products/edwards_turbo_ext70_d",
            children: [{
                path: "/products/edwards_turbo_ext70_d",
                component: edwards_turbo_ext70_d,
                name: "edwards_turbo_ext70_d"
            }]
        },
        {
            path: "/products/edwards_turbo_ext70_p",
            component: edwards_turbo_ext70_p,
            redirect: "/products/edwards_turbo_ext70_p",
            children: [{
                path: "/products/edwards_turbo_ext70_p",
                component: edwards_turbo_ext70_p,
                name: "edwards_turbo_ext70_p"
            }]
        },
        /*-----------edwards_turbo_stations-------------*/
        {
            path: "/products/edwards_turbo_stations",
            component: edwards_turbo_stations,
            redirect: "/products/edwards_turbo_stations",
            children: [{
                path: "/products/edwards_turbo_stations",
                component: edwards_turbo_stations,
                name: "edwards_turbo_stations"
            }]
        },
        {
            path: "/products/edwards_turbo_stationsm",
            component: edwards_turbo_stationsm,
            redirect: "/products/edwards_turbo_stationsm",
            children: [{
                path: "/products/edwards_turbo_stationsm",
                component: edwards_turbo_stationsm,
                name: "edwards_turbo_stationsm"
            }]
        },
        /*-----------edwards_turbo_ts75-------------*/
        {
            path: "/products/edwards_turbo_ts75",
            component: edwards_turbo_ts75,
            redirect: "/products/edwards_turbo_ts75",
            children: [{
                path: "/products/edwards_turbo_ts75",
                component: edwards_turbo_ts75,
                name: "edwards_turbo_ts75"
            }]
        },
        /*-----------edwards_XDD1-------------*/
        {
            path: "/products/edwards_XDD1",
            component: edwards_XDD1,
            redirect: "/products/edwards_XDD1",
            children: [{
                path: "/products/edwards_XDD1",
                component: edwards_XDD1,
                name: "edwards_XDD1"
            }]
        },
        /*-----------edwards_D_LAB-------------*/
        {
            path: "/products/edwards_D_LAB",
            component: edwards_D_LAB,
            redirect: "/products/D_LAB",
            children: [{
                path: "/products/D_LAB",
                component: edwards_D_LAB,
                name: "edwards_D_LAB"
            }]
        },
        /*-----------small_pump_accessories-------------*/
        {
            path: "/products/small_pump_accessories",
            component: small_pump_accessories,
            redirect: "/products/small_pump_accessories",
            children: [{
                path: "/products/small_pump_accessories",
                component: small_pump_accessories,
                name: "small_pump_accessories"
            }]
        },
        {
            path: "/products/small_pump_mist",
            component: small_pump_mist,
            redirect: "/products/small_pump_mist",
            children: [{
                path: "/products/small_pump_mist",
                component: small_pump_mist,
                name: "small_pump_mist"
            }]
        },
        {
            path: "/products/small_pump_return",
            component: small_pump_return,
            redirect: "/products/small_pump_return",
            children: [{
                path: "/products/small_pump_return",
                component: small_pump_return,
                name: "small_pump_return"
            }]
        },
        {
            path: "/products/small_pump_liquid",
            component: small_pump_liquid,
            redirect: "/products/small_pump_liquid",
            children: [{
                path: "/products/small_pump_liquid",
                component: small_pump_liquid,
                name: "small_pump_liquid"
            }]
        },
        {
            path: "/products/small_pump_ito20k",
            component: small_pump_ito20k,
            redirect: "/products/small_pump_ito20k",
            children: [{
                path: "/products/small_pump_ito20k",
                component: small_pump_ito20k,
                name: "small_pump_ito20k"
            }]
        }, {
            path: "/products/small_pump_itc20k",
            component: small_pump_itc20k,
            redirect: "/products/small_pump_itc20k",
            children: [{
                path: "/products/small_pump_itc20k",
                component: small_pump_itc20k,
                name: "small_pump_itc20k"
            }]
        }, {
            path: "/products/small_pump_itf20k",
            component: small_pump_itf20k,
            redirect: "/products/small_pump_itf20k",
            children: [{
                path: "/products/small_pump_itf20k",
                component: small_pump_itf20k,
                name: "small_pump_itf20k"
            }]
        }, {
            path: "/products/small_pump_fl20k",
            component: small_pump_fl20k,
            redirect: "/products/small_pump_fl20k",
            children: [{
                path: "/products/small_pump_fl20k",
                component: small_pump_fl20k,
                name: "small_pump_fl20k"
            }]
        }, {
            path: "/products/small_pump_vibration",
            component: small_pump_vibration,
            redirect: "/products/small_pump_vibration",
            children: [{
                path: "/products/small_pump_vibration",
                component: small_pump_vibration,
                name: "small_pump_vibration"
            }]
        }, {
            path: "/products/small_pump_drain",
            component: small_pump_drain,
            redirect: "/products/small_pump_drain",
            children: [{
                path: "/products/small_pump_drain",
                component: small_pump_drain,
                name: "small_pump_drain"
            }]
        },
        {
            path: "/products/small_pump_ob20",
            component: small_pump_ob20,
            redirect: "/products/small_pump_ob20",
            children: [{
                path: "/products/small_pump_ob20",
                component: small_pump_ob20,
                name: "small_pump_ob20"
            }]
        },
        {
            path: "/products/small_pump_tag",
            component: small_pump_tag,
            redirect: "/products/small_pump_tag",
            children: [{
                path: "/products/small_pump_tag",
                component: small_pump_tag,
                name: "small_pump_tag"
            }]
        }, {
            path: "/products/small_pump_ebv20",
            component: small_pump_ebv20,
            redirect: "/products/small_pump_ebv20",
            children: [{
                path: "/products/small_pump_ebv20",
                component: small_pump_ebv20,
                name: "small_pump_ebv20"
            }]
        }, {
            path: "/products/small_pump_water",
            component: small_pump_water,
            redirect: "/products/small_pump_water",
            children: [{
                path: "/products/small_pump_water",
                component: small_pump_water,
                name: "small_pump_water"
            }]
        },
        {
            path: "/products/nim_vacuum",
            component: nim_vacuum,
            redirect: "/products/nim_vacuum",
            children: [{
                path: "/products/nim_vacuum",
                component: nim_vacuum,
                name: "nim_vacuum"
            }]
        }, {
            path: "/products/vacuum_peijian",
            component: vacuum_peijian,
            redirect: "/products/vacuum_peijian",
            children: [{
                path: "/products/vacuum_peijian",
                component: vacuum_peijian,
                name: "vacuum_peijian"
            }]
        },
        /*-------------GPC-----------*/
        {
            path: "/products/GPC",
            component: GPC,
            redirect: "/products/GPC",
            children: [{
                path: "/products/GPC",
                component: GPC,
                name: "GPC"
            }]
        },
        /*-------------ks-----------*/
        {
            path: "/products/ks",
            component: ks,
            redirect: "/products/ks",
            children: [{
                path: "/products/ks",
                component: ks,
                name: "ks"
            }]
        },
        /*----------parts-------*/
        {
            path: "/products/parts",
            component: parts,
            redirect: "/products/parts",
            children: [{
                path: "/products/parts",
                component: parts,
                name: "parts"
            }]
        },
        {
            path: "/techService/vacuumBump",
            component: vacuumBump,
            redirect: "/techService/vacuumBump",
            children: [{
                path: "/techService/vacuumBump",
                component: vacuumBump,
                name: "vacuumBump"
            }]
        }, {
            path: "/techService/msService",
            component: msService,
            redirect: "/techService/msService",
            children: [{
                path: "/techService/msService",
                component: msService,
                name: "msService"
            }]
        }, {
            path: "/techService/qtService",
            component: qtService,
            redirect: "/techService/qtService",
            children: [{
                path: "/techService/qtService",
                component: qtService,
                name: "qtService"
            }]
        }, {
            path: "/techService/metrology",
            component: metrology,
            redirect: "/techService/metrology",
            children: [{
                path: "/techService/metrology",
                component: metrology,
                name: "metrology"
            }]
        }, {
            path: "/bbs/bbs_sw",
            component: bbs_sw,
            redirect: "/bbs/bbs_sw",
            children: [{
                path: "/bbs/bbs_sw",
                component: bbs_sw,
                name: "bbs_sw"
            }]
        }, {
            path: "/bbs/bbs_shw",
            component: bbs_shw,
            redirect: "/bbs/bbs_shw",
            children: [{
                path: "/bbs/bbs_shw",
                component: bbs_shw,
                name: "bbs_shw"
            }]
        }, {
            path: "/bbs/bbs_fayan",
            component: bbs_fayan,
            redirect: "/bbs/bbs_fayan",
            children: [{
                path: "/bbs/bbs_fayan",
                component: bbs_fayan,
                name: "bbs_fayan"
            }]
        }, {
            path: "/bbs/bbs_huifu",
            component: bbs_huifu,
            redirect: "/bbs/bbs_huifu",
            children: [{
                path: "/bbs/bbs_huifu",
                component: bbs_huifu,
                name: "bbs_huifu"
            }]
        },
    ]
});
export default router;