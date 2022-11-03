const adm_service = require("../services/AdministratorService");
const enum_status = require("../enum/status-code.enum");
const getAllAdministrator = async (req, res, next) => {
    try {
        const Admins = await adm_service.findAll();
        res.status(enum_status.OK).json({
            status: "Success",
            administrator: Admins
        })
    } catch (error) {
        res.status(enum_status.BAD_REQUEST).json({
            status: "Fail",
            message: error
        })
    }
}
const deleteAdministrator = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const adm = await adm_service.findById(id)
        console.log(adm);
        await adm_service.findByIdAndDelete(id);
        res.status(enum_status.OK).json({
            status: "Success",
            administrator: adm
        })
    } catch (error) {   
        res.status(enum_status.BAD_REQUEST).json({
            status: "Fail",
            message: error
        })
    }
}
module.exports = {
    getAllAdministrator,
    deleteAdministrator
}