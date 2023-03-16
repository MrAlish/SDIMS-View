const apiUrls = {
  auth: {
    loginUser: {
      method: "POST",
      url: "/login",
    },
  },
  common: {
    fiscal: {
      fiscal: {
        method: "GET",
        url: "/GetAllFiscalYear",
      },
      createFiscal: {
        method: "POST",
        url: "/CreateFiscalYear",
      },
      editFiscal: {
        method: "GET",
        url: "/GetFiscalYearById/",
      },
    },
    office: {
      office: {
        method: "GET",
        url: "/GetAllOffice",
      },
      createOffice: {
        method: "POST",
        url: "/CreateOffice",
      },
      editOffice: {
        method: "GET",
        url: "/GetOfficeById/",
      },
      state: {
        method: "GET",
        url: "/GetAllState",
      },
      getDistrictById: {
        method: "GET",
        url: "/GetDistrictById/",
      },
      getPalikaById: {
        method: "GET",
        url: "/GetPalikaById/",
      },
    },
    department: {
      department: {
        method: "GET",
        url: "/GetAllDepartment",
      },
      createDepartment: {
        method: "POST",
        url: "/CreateDepartment",
      },
      editDepartment: {
        method: "GET",
        url: "/GetDepartmentById/",
      },
    },
    subDepartment: {
      subDepartment: {
        method: "GET",
        url: "/GetAllSubDepartment",
      },
      createSubDepartment: {
        method: "POST",
        url: "/CreateSubDepartment",
      },
      editSubDepartment: {
        method: "GET",
        url: "/GetSubDepartmentById/",
      },
    },
    ward: {
      ward: {
        method: "GET",
        url: "/GetAllWard",
      },
      createward: {
        method: "POST",
        url: "/CreateWard",
      },
      editward: {
        method: "GET",
        url: "/GetWardById/",
      },
    },
    counter: {
      counter: {
        method: "GET",
        url: "/GetAllCounter",
      },
      createCounter: {
        method: "POST",
        url: "/CreateCounter",
      },
      editCounter: {
        method: "GET",
        url: "/GetCounterById/",
      },
    },
    rajPatrankitSheni: {
      rajPatrankitSheni: {
        method: "GET",
        url: "/GetAllRajPatrankitSheni",
      },
      createRajPatrankitSheni: {
        method: "POST",
        url: "/CreateRajPatrankitSheni",
      },
      editRajPatrankitSheni: {
        method: "GET",
        url: "/GetRajPatrankitSheniById/",
      },
    },
    shredi: {
      shredi: {
        method: "GET",
        url: "/GetAllShredi",
      },
      createShredi: {
        method: "POST",
        url: "/CreateShredi",
      },
      editShredi: {
        method: "GET",
        url: "/GetShrediById/",
      },
    },
    post: {
      post: {
        method: "GET",
        url: "/GetAllPost",
      },
      createPost: {
        method: "POST",
        url: "/CreatePost",
      },
      editPost: {
        method: "GET",
        url: "/GetPostById/",
      },
    },
    sewa: {
      sewa: {
        method: "GET",
        url: "/GetAllSewa",
      },
      createSewa: {
        method: "POST",
        url: "/CreateSewa",
      },
      editSewa: {
        method: "GET",
        url: "/GetSewaById/",
      },
    },
    group: {
      group: {
        method: "GET",
        url: "/GetAllGroup",
      },
      createGroup: {
        method: "POST",
        url: "/CreateGroup",
      },
      editGroup: {
        method: "GET",
        url: "/GetGroupById/",
      },
    },
    subGroup: {
      subGroup: {
        method: "GET",
        url: "/GetAllSubGroup",
      },
      createSubGroup: {
        method: "POST",
        url: "/CreateSubGroup",
      },
      editSubGroup: {
        method: "GET",
        url: "/GetSubGroupById/",
      },
    },
    appointment: {
      appointment: {
        method: "GET",
        url: "/GetAllAppointment",
      },
      createAppointment: {
        method: "POST",
        url: "/CreateAppointment",
      },
      editAppointment: {
        method: "GET",
        url: "/GetAppointmentById/",
      },
    },
    sewaParimad: {
      sewaParimad: {
        method: "GET",
        url: "/GetAllSewaParimad",
      },
      createSewaParimad: {
        method: "POST",
        url: "/CreateSewaParimad",
      },
      editSewaParimad: {
        method: "GET",
        url: "/GetSewaParimadById/",
      },
    },
    padPurtiType: {
      padPurtiType: {
        method: "GET",
        url: "/GetAllPadPurtiType",
      },
      createPadPurtiType: {
        method: "POST",
        url: "/CreatePadPurtiType",
      },
      editPadPurtiType: {
        method: "GET",
        url: "/GetPadPurtiTypeById/",
      },
    },
    cast: {
      cast: {
        method: "GET",
        url: "/GetAllCast",
      },
      createCast: {
        method: "POST",
        url: "/CreateCast",
      },
      editCast: {
        method: "GET",
        url: "/GetCastById/",
      },
    },

    relation: {
      relation: {
        method: "GET",
        url: "/GetAllRelation",
      },
      createRelation: {
        method: "POST",
        url: "/CreateRelation",
      },
      editRelation: {
        method: "GET",
        url: "/GetRelationById/",
      },
    },
    education: {
      education: {
        method: "GET",
        url: "/GetAllEducation",
      },
      createEducation: {
        method: "POST",
        url: "/CreateEducation",
      },
      editEducation: {
        method: "GET",
        url: "/GetEducationById/",
      },
    },
    faculty: {
      faculty: {
        method: "GET",
        url: "/GetAllFaculty",
      },
      createFaculty: {
        method: "POST",
        url: "/CreateFaculty",
      },
      editFaculty: {
        method: "GET",
        url: "/GetFacultyById/",
      },
    },
    occupation: {
      occupation: {
        method: "GET",
        url: "/GetAllOccupation",
      },
      createOccupation: {
        method: "POST",
        url: "/CreateOccupation",
      },
      editOccupation: {
        method: "GET",
        url: "/GetOccupationById/",
      },
    },
    talimType: {
      talimType: {
        method: "GET",
        url: "/GetAllTalimType",
      },
      createTalimType: {
        method: "POST",
        url: "/CreateTalimType",
      },
      editTalimType: {
        method: "GET",
        url: "/GetTalimTypeById/",
      },
    },
    awardType: {
      awardType: {
        method: "GET",
        url: "/GetAllAwardType",
      },
      createAwardType: {
        method: "POST",
        url: "/CreateAwardType",
      },
      editAwardType: {
        method: "GET",
        url: "/GetAwardTypeById/",
      },
    },
    punishment: {
      punishment: {
        method: "GET",
        url: "/GetAllPunishment",
      },
      createPunishment: {
        method: "POST",
        url: "/CreatePunishment",
      },
      editPunishment: {
        method: "GET",
        url: "/GetPunishmentById/",
      },
    },
    subPunishment: {
      subPunishment: {
        method: "GET",
        url: "/GetAllSubPunishment",
      },
      createSubPunishment: {
        method: "POST",
        url: "/CreateSubPunishment",
      },
      editSubPunishment: {
        method: "GET",
        url: "/GetSubPunishmentById/",
      },
    },
    nationality: {
      nationality: {
        method: "GET",
        url: "/GetAllNationality",
      },
      createNationality: {
        method: "POST",
        url: "/CreateNationality",
      },
      editNationality: {
        method: "GET",
        url: "/GetNationalityById/",
      },
    },
    language: {
      language: {
        method: "GET",
        url: "/GetAllLanguage",
      },
      createLanguage: {
        method: "POST",
        url: "/CreateLanguage",
      },
      editLanguage: {
        method: "GET",
        url: "/GetLanguageById/",
      },
    },
    cast: {
      cast: {
        method: "GET",
        url: "/GetAllCast",
      },
      createCast: {
        method: "POST",
        url: "/CreateCast",
      },
      editCast: {
        method: "GET",
        url: "/GetCastById/",
      },
    },
  },
  planning: {
    workArea: {
      workArea: {
        method: "GET",
        url: "/GetAllWorkArea",
      },
      createWorkArea: {
        method: "POST",
        url: "/CreateWorkArea",
      },
      editWorkArea: {
        method: "GET",
        url: "/GetWorkAreaById/",
      },
      deleteWorkArea: {
        method: "DELETE",
        url: "/DeleteWorkArea/",
      },
    },
    workType: {
      workType: {
        method: "GET",
        url: "/GetAllWorkType",
      },
      createWorkType: {
        method: "POST",
        url: "/CreateWorkType",
      },
      editWorkType: {
        method: "GET",
        url: "/GetWorkTypeById/",
      },
      deleteWorkType: {
        method: "DELETE",
        url: "/DeleteWorkType/",
      },
    },
    upaChetra: {
      upaChetra: {
        method: "GET",
        url: "/GetAllUpaChetra",
      },
      createUpaChetra: {
        method: "POST",
        url: "/CreateUpaChetra",
      },
      editUpaChetra: {
        method: "GET",
        url: "/GetUpaChetraById/",
      },
      deleteUpaChetra: {
        method: "DELETE",
        url: "/DeleteUpaChetra/",
      },
    },
   
    upaChetraDetail: {
      upaChetraDetail: {
        method: "GET",
        url: "/GetAllUpaChetraDetail",
      },
      createUpaChetraDetail: {
        method: "POST",
        url: "/CreateUpaChetraDetail",
      },
      editUpaChetraDetail: {
        method: "GET",
        url: "/GetUpaChetraDetailById/",
      },
      deleteUpaChetraDetail: {
        method: "DELETE",
        url: "/DeleteUpaChetraDetail/",
      },
    },
    karKatti: {
      karKatti: {
        method: "GET",
        url: "/GetAllKarKatti",
      },
      createKarKatti: {
        method: "POST",
        url: "/CreateKarKatti",
      },
      editKarKatti: {
        method: "GET",
        url: "/GetKarKattiById/",
      },
      deleteKarKatti: {
        method: "DELETE",
        url: "/DeleteKarKatti/",
      },
    },
    documentType: {
      documentType: {
        method: "GET",
        url: "/GetAllDocumentType",
      },
      createDocumentType: {
        method: "POST",
        url: "/CreateDocumentType",
      },
      editDocumentType: {
        method: "GET",
        url: "/GetDocumentTypeById/",
      },
      deleteDocumentType: {
        method: "DELETE",
        url: "/DeleteDocumentType/",
      },
    },
    bhuktaniType: {
      bhuktaniType: {
        method: "GET",
        url: "/GetAllBhuktaniType",
      },
      createBhuktaniType: {
        method: "POST",
        url: "/CreateBhuktaniType",
      },
      editBhuktaniType: {
        method: "GET",
        url: "/GetBhuktaniTypeById/",
      },
      deleteBhuktaniType: {
        method: "DELETE",
        url: "/DeleteBhuktaniType/",
      },
    },
    thekkaShortType: {
      thekkaShortType: {
        method: "GET",
        url: "/GetAllThekkaShortType",
      },
      createThekkaShortType: {
        method: "POST",
        url: "/CreateThekkaShortType",
      },
      editThekkaShortType: {
        method: "GET",
        url: "/GetThekkaShortTypeById/",
      },
      deleteThekkaShortType: {
        method: "DELETE",
        url: "/DeleteThekkaShortType/",
      },
    },
    thekkaKarKatti: {
      thekkaKarKatti: {
        method: "GET",
        url: "/GetAllThekkaKarKatti",
      },
      createThekkaKarKatti: {
        method: "POST",
        url: "/CreateThekkaKarKatti",
      },
      editThekkaKarKatti: {
        method: "GET",
        url: "/GetThekkaKarKattiById/",
      },
      deleteThekkaKarKatti: {
        method: "DELETE",
        url: "/DeleteThekkaKarKatti/",
      },
    },
    thekkaBhuktaniType: {
      thekkaBhuktaniType: {
        method: "GET",
        url: "/GetAllThekkaBhuktaniType",
      },
      createThekkaBhuktaniType: {
        method: "POST",
        url: "/CreateThekkaBhuktaniType",
      },
      editThekkaBhuktaniType: {
        method: "GET",
        url: "/GetThekkaBhuktaniTypeById/",
      },
      deleteThekkaBhuktaniType: {
        method: "DELETE",
        url: "/DeleteThekkaBhuktaniType/",
      },
    },
    sartaSetup: {
      sartaSetup: {
        method: "GET",
        url: "/GetAllSartaSetup",
      },
      createSartaSetup: {
        method: "POST",
        url: "/CreateSartaSetup",
      },
      editSartaSetup: {
        method: "GET",
        url: "/GetSartaSetupById/",
      },
      deleteSartaSetup: {
        method: "DELETE",
        url: "/DeleteSartaSetup/",
      },
    },
  },
  revenue: {
    buildingType: {
      buildingType: {
        method: "GET",
        url: "/GetAllBuildingType",
      },
      createBuildingType: {
        method: "POST",
        url: "/CreateBuildingType",
      },
      editBuildingType: {
        method: "GET",
        url: "/GetBuildingType/",
      },
    },
    houseRentType: {
      houseRentType: {
        method: "GET",
        url: "/GetAllHouseRentType",
      },
      createHouseRentType: {
        method: "POST",
        url: "/CreateHouseRentType",
      },
      editHouseRentType: {
        method: "GET",
        url: "/GetHouseRentType/",
      },
    },
    businessType: {
      businessType: {
        method: "GET",
        url: "/GetAllBusinessType",
      },
      createBusinessType: {
        method: "POST",
        url: "/CreateBusinessType",
      },
      editBusinessType: {
        method: "GET",
        url: "/GetBusinessType/",
      },
    },
    businessCloseReason: {
      businessCloseReason: {
        method: "GET",
        url: "/GetAllBusinessCloseReason",
      },
      createBusinessCloseReason: {
        method: "POST",
        url: "/CreateBusinessCloseReason",
      },
      editBusinessCloseReason: {
        method: "GET",
        url: "/GetBusinessCloseReason/",
      },
    },
    businessStatus: {
      businessStatus: {
        method: "GET",
        url: "/GetAllBusinessStatus",
      },
      createBusinessStatus: {
        method: "POST",
        url: "/CreateBusinessStatus",
      },
      editBusinessStatus: {
        method: "GET",
        url: "/GetBusinessStatus/",
      },
    },
    businessOwnershipType: {
      businessOwnershipType: {
        method: "GET",
        url: "/GetAllBusinessOwnershipType",
      },
      createBusinessOwnershipType: {
        method: "POST",
        url: "/CreateBusinessOwnershipType",
      },
      editBusinessOwnershipType: {
        method: "GET",
        url: "/GetBusinessOwnershipType/",
      },
    },
    businessStatus: {
      businessStatus: {
        method: "GET",
        url: "/GetAllBusinessStatus",
      },
      createBusinessStatus: {
        method: "POST",
        url: "/CreateBusinessStatus",
      },
      editBusinessStatus: {
        method: "GET",
        url: "/GetBusinessStatus/",
      },
    },
    businessOwnershipType: {
      businessOwnershipType: {
        method: "GET",
        url: "/GetAllBusinessOwnershiptype",
      },
      createBusinessOwnershiptype: {
        method: "POST",
        url: "/CreateBusinessOwnershiptype",
      },
      editBusinessOwnershiptype: {
        method: "GET",
        url: "/GetBusinessOwnershiptype/",
      },
    },
    invoiceCancelReason: {
      invoiceCancelReason: {
        method: "GET",
        url: "/GetAllInvoiceCancelReason",
      },
      createInvoiceCancelReason: {
        method: "POST",
        url: "/CreateInvoiceCancelReason",
      },
      editInvoiceCancelReason: {
        method: "GET",
        url: "/GetInvoiceCancelReason/",
      },
    },
    taxPayerType: {
      taxPayerType: {
        method: "GET",
        url: "/GetAllTaxPayerType",
      },
      createTaxPayerType: {
        method: "POST",
        url: "/CreateTaxPayerType",
      },
      editTaxPayerType: {
        method: "GET",
        url: "/GetTaxPayerType/",
      },
    },
    vehicleType: {
      vehicleType: {
        method: "GET",
        url: "/GetAllVehicleType",
      },
      createVehicleType: {
        method: "POST",
        url: "/CreateVehicleType",
      },
      editVehicleType: {
        method: "GET",
        url: "/GetVehicleType/",
      },
    },
    takeoverType: {
      takeoverType: {
        method: "GET",
        url: "/GetAllTakeoverType",
      },
      createTakeoverType: {
        method: "POST",
        url: "/CreateTakeoverType",
      },
      editTakeoverType: {
        method: "GET",
        url: "/GetTakeoverType/",
      },
    },
    vehicleStatus: {
      vehicleStatus: {
        method: "GET",
        url: "/GetAllVehicleStatus",
      },
      createVehicleStatus: {
        method: "POST",
        url: "/CreateVehicleStatus",
      },
      editVehicleStatus: {
        method: "GET",
        url: "/GetVehicleStatus/",
      },
    },
    vehicleCloseReason: {
      vehicleCloseReason: {
        method: "GET",
        url: "/GetAllVehicleCloseReason",
      },
      createVehicleCloseReason: {
        method: "POST",
        url: "/CreateVehicleCloseReason",
      },
      editVehicleCloseReason: {
        method: "GET",
        url: "/GetVehicleCloseReason/",
      },
    },
    fuelType: {
      fuelType: {
        method: "GET",
        url: "/GetAllFuelType",
      },
      createFuelType: {
        method: "POST",
        url: "/CreateFuelType",
      },
      editFuelType: {
        method: "GET",
        url: "/GetFuelType/",
      },
    },
    serviceCategory: {
      serviceCategory: {
        method: "GET",
        url: "/GetAllServiceCategory",
      },
      createServiceCategory: {
        method: "POST",
        url: "/CreateServiceCategory",
      },
      editServiceCategory: {
        method: "GET",
        url: "/GetServiceCategory/",
      },
    },
    service: {
      service: {
        method: "GET",
        url: "/GetAllService",
      },
      createService: {
        method: "POST",
        url: "/CreateService",
      },
      editService: {
        method: "GET",
        url: "/GetService/",
      },
    },
  },
};
export default apiUrls;
