import Body from "../body";
import NotNull from "@dikac/t-object/boolean/type";
import ProjectAksesType from "../../../../proyek/boolean/type";
import UserAksesType from "../../../../user/boolean/type";
import UnitKerjaAksesType from "../../../../unit-kerja/boolean/type";
import RencanaAksesType from "../../../../rencana/boolean/type";
import LevelUsahaType from "../../../../level-usaha/boolean/type";
import JenisUsahaType from "../../../../jenis-usaha/boolean/type";
import JenisUnitType from "../../../../jenis-unit/boolean/type";
import AuditProgramType from "../../../../audit-program/boolean/type";
import KlausulType from "../../../../klausul/boolean/type";
import ProsedurType from "../../../../prosedur/boolean/type";
import LevelType from "../../../../level/boolean/type";
import JabatanType from "../../../../jabatan/boolean/type";
import FungsiType from "../../../../fungsi/boolean/type";
import ArrayOf from "@dikac/t-array/boolean/array-of";

export default function Type(value : any) : value is Body {

    if(!NotNull<Body>(value)) {

        return false;
    }

    if(!ArrayOf(value.user, UserAksesType))  {

        return false;
    }

    if(!ArrayOf(value.proyek, ProjectAksesType))  {

        return false;
    }

    if(!ArrayOf(value.unitKerja, UnitKerjaAksesType))  {

        return false;
    }

    if(!ArrayOf(value.rencana, RencanaAksesType))  {

        return false;
    }

    if(!ArrayOf(value.levelUsaha, LevelUsahaType))  {

        return false;
    }

    if(!ArrayOf(value.jenisUsaha, JenisUsahaType))  {

        return false;
    }

    if(!ArrayOf(value.jenisUnit, JenisUnitType))  {

        return false;
    }

    if(!ArrayOf(value.auditProgram, AuditProgramType))  {

        return false;
    }

    if(!ArrayOf(value.klausul, KlausulType))  {

        return false;
    }

    if(!ArrayOf(value.prosedur, ProsedurType))  {

        return false;
    }

    if(!ArrayOf(value.fungsi, FungsiType))  {

        return false;
    }

    if(!ArrayOf(value.level, LevelType))  {

        return false;
    }

    if(!ArrayOf(value.jabatan, JabatanType))  {

        return false;
    }

    return true;

}