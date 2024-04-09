/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const features_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(55);
const app_service_1 = __webpack_require__(56);
const mongoose_1 = __webpack_require__(26);
const features_2 = __webpack_require__(5);
const util_env_1 = __webpack_require__(57);
const dist_1 = __webpack_require__(33);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [features_1.MealModule,
            features_2.BackendFeaturesModule,
            features_1.AuthModule,
            mongoose_1.MongooseModule.forRoot(util_env_1.environment.MONGO_DB_CONNECTION_STRING),
            dist_1.Neo4jModule.forRoot({
                scheme: util_env_1.environment.NEO4J_SCHEME,
                host: util_env_1.environment.NEO4J_HOST,
                port: parseInt(util_env_1.environment.NEO4J_PORT, 10),
                username: util_env_1.environment.NEO4J_USERNAME,
                password: util_env_1.environment.NEO4J_PASSWORD,
                database: util_env_1.environment.NEO4J_DATABASE,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(53), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_controller_1 = __webpack_require__(7);
const meal_service_1 = __webpack_require__(8);
let MealModule = exports.MealModule = class MealModule {
};
exports.MealModule = MealModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [meal_controller_1.MealController],
        providers: [meal_service_1.MealService],
        exports: [meal_service_1.MealService],
    })
], MealModule);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meal_service_1 = __webpack_require__(8);
const common_2 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
const dto_1 = __webpack_require__(18);
let MealController = exports.MealController = class MealController {
    constructor(mealService) {
        this.mealService = mealService;
    }
    getAll() {
        return this.mealService.getAll();
    }
    getOne(id) {
        return this.mealService.getOne(id);
    }
    create(data) {
        return this.mealService.create(data);
    }
};
tslib_1.__decorate([
    (0, common_2.Get)(''),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], MealController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_2.Get)(':id'),
    tslib_1.__param(0, (0, common_2.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof api_1.IMeal !== "undefined" && api_1.IMeal) === "function" ? _b : Object)
], MealController.prototype, "getOne", null);
tslib_1.__decorate([
    (0, common_2.Post)(''),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateMealDto !== "undefined" && dto_1.CreateMealDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof api_1.IMeal !== "undefined" && api_1.IMeal) === "function" ? _d : Object)
], MealController.prototype, "create", null);
exports.MealController = MealController = tslib_1.__decorate([
    (0, common_1.Controller)('meal'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof meal_service_1.MealService !== "undefined" && meal_service_1.MealService) === "function" ? _a : Object])
], MealController);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const rxjs_1 = __webpack_require__(9);
const common_2 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
let MealService = exports.MealService = class MealService {
    constructor() {
        this.TAG = 'MealService';
        this.meals$ = new rxjs_1.BehaviorSubject([
            {
                id: '0',
                title: 'Spaghetti con funghi',
                description: 'Vega version of the famous spaghetti recipe.',
                isVega: true,
                sort: api_1.MealSort.Breakfast,
                cook: "quinn",
                dateServed: new Date(),
            },
        ]);
    }
    getAll() {
        common_2.Logger.log('getAll', this.TAG);
        return this.meals$.value;
    }
    getOne(id) {
        common_2.Logger.log(`getOne(${id})`, this.TAG);
        const meal = this.meals$.value.find((td) => td.id === id);
        if (!meal) {
            throw new common_1.NotFoundException(`Meal could not be found!`);
        }
        return meal;
    }
    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(meal) {
        common_2.Logger.log('create', this.TAG);
        const current = this.meals$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newMeal = {
            ...meal,
            id: `meal-${Math.floor(Math.random() * 10000)}`,
            isVega: false,
            sort: api_1.MealSort.Breakfast,
            cook: "quinn",
            dateServed: new Date(),
        };
        this.meals$.next([...current, newMeal]);
        return newMeal;
    }
};
exports.MealService = MealService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MealService);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MealSort = void 0;
var MealSort;
(function (MealSort) {
    MealSort["Breakfast"] = "Breakfast";
    MealSort["Lunch"] = "Lunch";
    MealSort["Dinner"] = "Dinner";
    MealSort["Other"] = "Other";
})(MealSort || (exports.MealSort = MealSort = {}));


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGender = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "Admin";
    UserRole["editor"] = "Editor";
    UserRole["guest"] = "Guest";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserGender;
(function (UserGender) {
    UserGender["male"] = "Male";
    UserGender["female"] = "Female";
    UserGender["other"] = "Other";
})(UserGender || (exports.UserGender = UserGender = {}));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["active"] = "Active";
    TicketStatus["inactive"] = "Inactive";
    TicketStatus["pending"] = "Pending";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DtoModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let DtoModule = exports.DtoModule = class DtoModule {
};
exports.DtoModule = DtoModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], DtoModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMealDto = exports.UpsertMealDto = exports.CreateMealDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(21);
const api_1 = __webpack_require__(10);
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
class CreateMealDto {
}
exports.CreateMealDto = CreateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _a : Object)
], CreateMealDto.prototype, "sort", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], CreateMealDto.prototype, "cook", void 0);
class UpsertMealDto {
}
exports.UpsertMealDto = UpsertMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Boolean)
], UpsertMealDto.prototype, "isVega", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpsertMealDto.prototype, "dateServed", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof api_1.MealSort !== "undefined" && api_1.MealSort) === "function" ? _c : Object)
], UpsertMealDto.prototype, "sort", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], UpsertMealDto.prototype, "cook", void 0);
class UpdateMealDto {
}
exports.UpdateMealDto = UpdateMealDto;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMealDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Boolean)
], UpdateMealDto.prototype, "completed", void 0);


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseInterceptor = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(23);
let ApiResponseInterceptor = exports.ApiResponseInterceptor = class ApiResponseInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((results) => {
            if (results) {
                return {
                    results,
                    info: {
                        version: '1.0',
                        type: results instanceof Array ? 'list' : 'object',
                        count: results instanceof Array ? results.length : 1,
                    },
                };
            }
            else {
                return {
                    results: undefined,
                    info: {
                        version: '1.0',
                        type: 'none',
                        count: 0,
                    },
                };
            }
        }));
    }
};
exports.ApiResponseInterceptor = ApiResponseInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ApiResponseInterceptor);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendFeaturesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(25); // Import JwtModule first
const mongoose_1 = __webpack_require__(26);
const ticket_controller_1 = __webpack_require__(27);
const ticket_service_1 = __webpack_require__(28);
const ticket_schema_1 = __webpack_require__(30);
const Neo4jUser_service_1 = __webpack_require__(32);
const Neo4jUser_controller_1 = __webpack_require__(35);
const player_service_1 = __webpack_require__(37);
const club_service_1 = __webpack_require__(39);
const division_service_1 = __webpack_require__(41);
const player_controller_1 = __webpack_require__(43);
const division_controller_1 = __webpack_require__(45);
const club_controller_1 = __webpack_require__(47);
const club_schema_1 = __webpack_require__(40);
const player_schema_1 = __webpack_require__(38);
const division_schema_1 = __webpack_require__(42);
let BackendFeaturesModule = exports.BackendFeaturesModule = class BackendFeaturesModule {
};
exports.BackendFeaturesModule = BackendFeaturesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'yourSecretKey',
                signOptions: { expiresIn: '3600s' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'Ticket', schema: ticket_schema_1.TicketSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Club', schema: club_schema_1.ClubSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Player', schema: player_schema_1.PlayerSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Division', schema: division_schema_1.DivisionSchema }]),
        ],
        controllers: [ticket_controller_1.TicketController, Neo4jUser_controller_1.UserController, player_controller_1.PlayerController, club_controller_1.ClubController, division_controller_1.DivisionController],
        providers: [ticket_service_1.TicketService, Neo4jUser_service_1.Neo4jUserService, player_service_1.PlayerService, club_service_1.ClubService, division_service_1.DivisionService],
        exports: [ticket_service_1.TicketService, Neo4jUser_service_1.Neo4jUserService, player_service_1.PlayerService, club_service_1.ClubService, division_service_1.DivisionService],
    })
], BackendFeaturesModule);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketController = void 0;
const tslib_1 = __webpack_require__(4);
const ticket_service_1 = __webpack_require__(28);
const api_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const public_decorator_1 = __webpack_require__(31);
let TicketController = exports.TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    getTickets() {
        return this.ticketService.getTickets();
    }
    getTicketById(id) {
        return this.ticketService.getTicketById(id);
    }
    addTicket(ticketData) {
        return this.ticketService.addTicket(ticketData);
    }
    deleteTicket(id) {
        return this.ticketService.deleteTicket(id);
    }
    updateTicket(id, updatedTicketData) {
        return this.ticketService.updateTicket(id, updatedTicketData);
    }
    updateUserTicket(id, updatedTicketData) {
        return this.ticketService.updateTicket(id, updatedTicketData);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    (0, public_decorator_1.Public)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TicketController.prototype, "getTickets", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TicketController.prototype, "getTicketById", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof api_1.ITicket !== "undefined" && api_1.ITicket) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TicketController.prototype, "addTicket", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TicketController.prototype, "deleteTicket", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TicketController.prototype, "updateTicket", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id/user'),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_j = typeof Partial !== "undefined" && Partial) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], TicketController.prototype, "updateUserTicket", null);
exports.TicketController = TicketController = tslib_1.__decorate([
    (0, common_1.Controller)('ticket'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ticket_service_1.TicketService !== "undefined" && ticket_service_1.TicketService) === "function" ? _a : Object])
], TicketController);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(26);
const mongoose_2 = __webpack_require__(29);
const ticket_schema_1 = __webpack_require__(30); // Import the correct types
let TicketService = exports.TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async getTickets() {
        console.log('getTickets aangeroepen in service backend');
        return this.ticketModel.find().exec();
    }
    async getTicketById(id) {
        console.log(`getTicketById invoked with id: ${id}`);
        return this.ticketModel.findById(id).exec();
    }
    async addTicket(ticketData) {
        const createdTicket = new this.ticketModel(ticketData);
        return createdTicket.save();
    }
    async deleteTicket(id) {
        await this.ticketModel.findByIdAndDelete(id).exec();
    }
    async updateTicket(id, updatedTicketData) {
        // Find the ticket by ID and update its data
        const updatedTicket = await this.ticketModel.findByIdAndUpdate(id, { $set: updatedTicketData }, { new: true } // Return the updated document
        ).exec();
        return updatedTicket;
    }
    async updateUserTicket(id, updatedTicketData) {
        const updatedTicket = await this.ticketModel.findByIdAndUpdate(id, { $set: updatedTicketData }, { new: true }).exec();
        return updatedTicket;
    }
};
exports.TicketService = TicketService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(ticket_schema_1.Ticket.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TicketService);


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketSchema = exports.Ticket = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(26);
const mongoose_2 = __webpack_require__(29);
const api_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(21);
let Ticket = exports.Ticket = class Ticket {
};
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "title", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number
    }),
    tslib_1.__metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Ticket.prototype, "date", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String,
        default: api_1.TicketStatus.pending
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof api_1.TicketStatus !== "undefined" && api_1.TicketStatus) === "function" ? _b : Object)
], Ticket.prototype, "status", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number
    }),
    tslib_1.__metadata("design:type", Number)
], Ticket.prototype, "seat", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Types.ObjectId,
    }),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "divisionId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: [String]
    }),
    tslib_1.__metadata("design:type", Array)
], Ticket.prototype, "clubs", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
    }),
    tslib_1.__metadata("design:type", String)
], Ticket.prototype, "owner", void 0);
exports.Ticket = Ticket = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jUserService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
const common_2 = __webpack_require__(1);
const dist_1 = __webpack_require__(33);
const bcrypt = tslib_1.__importStar(__webpack_require__(34));
const jwt_1 = __webpack_require__(25);
let Neo4jUserService = exports.Neo4jUserService = class Neo4jUserService {
    constructor(neo4jService, jwtService) {
        this.neo4jService = neo4jService;
        this.jwtService = jwtService;
        this.TAG = 'Neo4jUserService';
    }
    async getAll() {
        common_2.Logger.log('getAll', this.TAG);
        const query = `MATCH (user:User) RETURN user`;
        const result = await this.neo4jService.read(query, {});
        common_2.Logger.log(`result: ${JSON.stringify(result)}`);
        return result?.records;
    }
    async getOne(Id) {
        common_2.Logger.log(`getOne(${Id})`, this.TAG);
        const query = `MATCH (n) WHERE n.Id = $Id RETURN n`;
        console.log('Parameters:', { Id }); // Log the query parameters for debugging
        const result = await this.neo4jService.write(query, { Id: parseInt(Id) });
        console.log('Result:', result); // Log the result for debugging
        return result.records;
    }
    async getFriends(Id) {
        common_2.Logger.log(`getFriends(${Id})`, this.TAG);
        try {
            const query = `MATCH (user:User {Id: $Id})-[:FRIENDS]-(friend:User) RETURN friend`;
            const result = await this.neo4jService.read(query, { Id: parseInt(Id) });
            const friends = result?.records.map((record) => record.get('friend').properties);
            return friends;
        }
        catch (error) {
            console.error('Error fetching friends:', error);
            throw new Error('Failed to fetch friends');
        }
    }
    async addFriend(email1, friendEmail) {
        common_2.Logger.log('addfriends called', this.TAG);
        common_2.Logger.log(`addFriend(${email1}, ${friendEmail})`, this.TAG);
        try {
            const query = `
      MATCH (user1:User { emailAddress: $email1 }), (user2:User { emailAddress: $friendEmail })
      CREATE (user1)-[:FRIENDS]->(user2)
    `;
            const result = await this.neo4jService.write(query, {
                email1,
                friendEmail,
            });
            return result;
        }
        catch (error) {
            console.error('Error adding friend:', error);
            throw new Error('Failed to add friend');
        }
    }
    async deleteFriend(email1, friendEmail) {
        try {
            const query = `
      MATCH (user1:User { emailAddress: $email1 })-[r:FRIENDS]->(user2:User { emailAddress: $friendEmail })
      DELETE r
    `;
            const result = await this.neo4jService.write(query, {
                email1,
                friendEmail,
            });
            return result;
        }
        catch (error) {
            console.error('Error deleting friend connection:', error);
            throw new Error('Failed to delete friend connection');
        }
    }
    async findOne(emailAddress) {
        const query = `MATCH (user:User {emailAddress: $emailAddress}) RETURN user`;
        const result = await this.neo4jService.read(query, { emailAddress });
        return result?.records[0]?.get('user').properties;
    }
    async create(newUser) {
        common_2.Logger.log('create', this.TAG);
        // Assuming you want to hash the password before storing it
        const hashedPassword = await this.generateHash(newUser.passwordHash);
        const query = `
      MERGE (user:User {Id: $Id})
      ON CREATE SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAddress = $emailAddress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.hasTransportation = $hasTransportation,
        user.passwordHash = $passwordHash
      ON MATCH SET 
        user.firstName = $firstName,
        user.lastName = $lastName, 
        user.image = $image,
        user.emailAddress = $emailAddress,
        user.dateOfBirth = $dateOfBirth,
        user.gender = $gender,
        user.role = $role,
        user.hasTransportation = $hasTransportation,
        user.passwordHash = $passwordHash
      RETURN user
    `;
        const result = await this.neo4jService.write(query, {
            Id: Math.floor(Math.random() * 10000),
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            image: newUser.image,
            emailAddress: newUser.emailAddress,
            dateOfBirth: newUser.dateOfBirth,
            gender: newUser.gender,
            role: newUser.role || api_1.UserRole.guest,
            hasTransportation: newUser.hasTransportation || false,
            passwordHash: hashedPassword,
        });
        const userProperties = result.records[0]?.get('user').properties;
        const payload = {
            sub: userProperties.Id,
            username: userProperties.emailAddress,
            role: userProperties.role,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        console.log('payload: ', payload);
        console.log('accessToken:', accessToken);
        return { user: userProperties, access_token: accessToken };
    }
    async update(Id, user) {
        common_2.Logger.log(`Update(${Id})`, this.TAG);
        // Check if any of the user properties are undefined, and provide default values if needed
        const updatedUser = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            image: user.image || '',
            emailAddress: user.emailAddress || '',
            dateOfBirth: user.dateOfBirth || '',
            gender: user.gender || '',
            role: user.role || '',
        };
        const query = `
      MATCH (user:User {Id: $Id})
      SET
          user.firstName = $firstName,
          user.lastName = $lastName,
          user.image = $image,
          user.emailAddress = $emailAddress,
          user.dateOfBirth = $dateOfBirth,
          user.gender = $gender,
          user.role = $role,
      RETURN user
  `;
        const parameters = {
            Id: parseInt(Id),
            ...updatedUser, // Use the updated user object with default values
        };
        console.log('Update Parameters:', parameters); // Log the parameters for debugging
        const result = await this.neo4jService.write(query, parameters);
        return result.records;
    }
    async delete(Id) {
        common_2.Logger.log(`Delete(${Id})`, this.TAG);
        const query = `MATCH (n) WHERE n.Id = $Id DETACH DELETE n`;
        const result = await this.neo4jService.write(query, { Id: parseInt(Id) });
        return result;
    }
    async validatePassword(password, passwordHash) {
        console.log('password: ', password);
        console.log('passwordHash: ', passwordHash);
        return bcrypt.compare(password, passwordHash);
    }
    async generateHash(password) {
        return bcrypt.hash(password, 10);
    }
};
exports.Neo4jUserService = Neo4jUserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dist_1.Neo4jService !== "undefined" && dist_1.Neo4jService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], Neo4jUserService);


/***/ }),
/* 33 */
/***/ ((module) => {

module.exports = require("nest-neo4j/dist");

/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const Neo4jUser_service_1 = __webpack_require__(32);
const api_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(36);
let UserController = exports.UserController = class UserController {
    constructor(neo4jService) {
        this.neo4jService = neo4jService;
    }
    async getAllUsers() {
        const users = await this.neo4jService.getAll();
        return users;
    }
    async getOneUser(Id) {
        const user = await this.neo4jService.getOne(Id);
        console.log('Id in controller: ', Id);
        console.log('controller user: ', user);
        return user;
    }
    async getFriends(Id) {
        const friends = await this.neo4jService.getFriends(Id);
        return friends;
    }
    async addFriend(body) {
        const result = await this.neo4jService.addFriend(body.email1, body.friendEmail);
        return result;
    }
    async deleteFriend(body) {
        const result = await this.neo4jService.deleteFriend(body.email1, body.friendEmail);
        return result;
    }
    async createUser(newUser) {
        const createdUser = await this.neo4jService.create(newUser);
        return createdUser;
    }
    async updateUser(Id, updatedUser) {
        const result = await this.neo4jService.update(Id, updatedUser);
        return result;
    }
    async deleteUser(Id) {
        const result = await this.neo4jService.delete(Id);
        return result;
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':Id'),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Param)('Id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getOneUser", null);
tslib_1.__decorate([
    (0, common_1.Get)(':Id/friends'),
    tslib_1.__param(0, (0, common_1.Param)('Id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getFriends", null);
tslib_1.__decorate([
    (0, common_1.Post)('friends'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "addFriend", null);
tslib_1.__decorate([
    (0, common_1.Delete)('friends'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteFriend", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    (0, public_decorator_1.Public)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_1.User !== "undefined" && api_1.User) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.Put)(':Id'),
    tslib_1.__param(0, (0, common_1.Param)('Id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof Pick !== "undefined" && Pick) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':Id'),
    tslib_1.__param(0, (0, common_1.Param)('Id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Neo4jUser_service_1.Neo4jUserService !== "undefined" && Neo4jUser_service_1.Neo4jUserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(29);
const mongoose_2 = __webpack_require__(26);
const player_schema_1 = __webpack_require__(38);
let PlayerService = exports.PlayerService = class PlayerService {
    constructor(playerModel) {
        this.playerModel = playerModel;
    }
    async getAllPlayers() {
        return this.playerModel.find().exec();
    }
    async getPlayerById(id) {
        return this.playerModel.findById(id).exec();
    }
    async createPlayer(playerData) {
        const createdPlayer = new this.playerModel(playerData);
        return createdPlayer.save();
    }
    async updatePlayer(id, updatedPlayerData) {
        return this.playerModel.findByIdAndUpdate(id, updatedPlayerData, { new: true }).exec();
    }
    async deletePlayer(id) {
        await this.playerModel.findByIdAndDelete(id).exec();
    }
};
exports.PlayerService = PlayerService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(player_schema_1.Player.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PlayerService);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerSchema = exports.Player = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(26);
const class_validator_1 = __webpack_require__(21);
let Player = exports.Player = class Player {
};
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Player.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Player.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Player.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Number
    }),
    tslib_1.__metadata("design:type", Number)
], Player.prototype, "number", void 0);
exports.Player = Player = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Player);
exports.PlayerSchema = mongoose_1.SchemaFactory.createForClass(Player);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClubService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(29);
const mongoose_2 = __webpack_require__(26);
const club_schema_1 = __webpack_require__(40);
let ClubService = exports.ClubService = class ClubService {
    constructor(clubModel) {
        this.clubModel = clubModel;
    }
    async getAllClubs() {
        return this.clubModel.find().exec();
    }
    async getClubById(id) {
        return this.clubModel.findById(id).exec();
    }
    async createClub(clubData) {
        const createdClub = new this.clubModel(clubData);
        return createdClub.save();
    }
    async updateClub(id, updatedClubData) {
        return this.clubModel.findByIdAndUpdate(id, updatedClubData, { new: true }).exec();
    }
    async deleteClub(id) {
        await this.clubModel.findByIdAndDelete(id).exec();
    }
    async getClubPlayers(id) {
        const club = await this.clubModel.findById(id).populate('players').exec();
        return club ? club.players : null;
    }
};
exports.ClubService = ClubService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(club_schema_1.Club.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], ClubService);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClubSchema = exports.Club = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(26);
const class_validator_1 = __webpack_require__(21);
const player_schema_1 = __webpack_require__(38);
let Club = exports.Club = class Club {
};
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Club.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Club.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: Date
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Club.prototype, "setupDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Club.prototype, "stadium", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: [player_schema_1.PlayerSchema],
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], Club.prototype, "players", void 0);
exports.Club = Club = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Club);
exports.ClubSchema = mongoose_1.SchemaFactory.createForClass(Club);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(29);
const mongoose_2 = __webpack_require__(26);
const division_schema_1 = __webpack_require__(42);
let DivisionService = exports.DivisionService = class DivisionService {
    constructor(divisionModel) {
        this.divisionModel = divisionModel;
    }
    async getAllDivisions() {
        return this.divisionModel.find().exec();
    }
    async getDivisionById(id) {
        return this.divisionModel.findById(id).exec();
    }
    async createDivision(divisionData) {
        const createdDivision = new this.divisionModel(divisionData);
        return createdDivision.save();
    }
    async updateDivision(id, updatedDivisionData) {
        return this.divisionModel.findByIdAndUpdate(id, updatedDivisionData, { new: true }).exec();
    }
    async deleteDivision(id) {
        await this.divisionModel.findByIdAndDelete(id).exec();
    }
};
exports.DivisionService = DivisionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)(division_schema_1.Division.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], DivisionService);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionSchema = exports.Division = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(26);
const class_validator_1 = __webpack_require__(21);
let Division = exports.Division = class Division {
};
tslib_1.__decorate([
    (0, class_validator_1.IsMongoId)(),
    tslib_1.__metadata("design:type", String)
], Division.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Division.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: String
    }),
    tslib_1.__metadata("design:type", String)
], Division.prototype, "ranking", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: String, ref: 'Club' }],
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], Division.prototype, "teams", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: String, ref: 'Ticket' }],
        default: [],
    }),
    tslib_1.__metadata("design:type", Array)
], Division.prototype, "tickets", void 0);
exports.Division = Division = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Division);
exports.DivisionSchema = mongoose_1.SchemaFactory.createForClass(Division);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const player_service_1 = __webpack_require__(37); // Import the PlayerService
const api_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(44);
let PlayerController = exports.PlayerController = class PlayerController {
    constructor(playerService) {
        this.playerService = playerService;
    }
    async getAllPlayers() {
        return this.playerService.getAllPlayers();
    }
    async getPlayerById(id) {
        return this.playerService.getPlayerById(id);
    }
    async createPlayer(playerData) {
        return this.playerService.createPlayer(playerData);
    }
    async updatePlayer(id, updatedPlayerData) {
        return this.playerService.updatePlayer(id, updatedPlayerData);
    }
    async deletePlayer(id) {
        return this.playerService.deletePlayer(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], PlayerController.prototype, "getAllPlayers", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PlayerController.prototype, "getPlayerById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof api_1.IPlayer !== "undefined" && api_1.IPlayer) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], PlayerController.prototype, "createPlayer", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], PlayerController.prototype, "updatePlayer", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], PlayerController.prototype, "deletePlayer", null);
exports.PlayerController = PlayerController = tslib_1.__decorate([
    (0, common_1.Controller)('player'),
    (0, public_decorator_1.Public)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" ? _a : Object])
], PlayerController);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DivisionController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const division_service_1 = __webpack_require__(41); // Import the DivisionService
const api_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(46);
let DivisionController = exports.DivisionController = class DivisionController {
    constructor(divisionService) {
        this.divisionService = divisionService;
    }
    async getAllDivisions() {
        return this.divisionService.getAllDivisions();
    }
    async getDivisionById(id) {
        return this.divisionService.getDivisionById(id);
    }
    async createDivision(divisionData) {
        return this.divisionService.createDivision(divisionData);
    }
    async updateDivision(id, updatedDivisionData) {
        return this.divisionService.updateDivision(id, updatedDivisionData);
    }
    async deleteDivision(id) {
        return this.divisionService.deleteDivision(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DivisionController.prototype, "getAllDivisions", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DivisionController.prototype, "getDivisionById", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof api_1.IDivision !== "undefined" && api_1.IDivision) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DivisionController.prototype, "createDivision", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], DivisionController.prototype, "updateDivision", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], DivisionController.prototype, "deleteDivision", null);
exports.DivisionController = DivisionController = tslib_1.__decorate([
    (0, common_1.Controller)('division'),
    (0, public_decorator_1.Public)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof division_service_1.DivisionService !== "undefined" && division_service_1.DivisionService) === "function" ? _a : Object])
], DivisionController);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClubController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const club_service_1 = __webpack_require__(39); // Make sure to import your ClubService
const api_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(48);
let ClubController = exports.ClubController = class ClubController {
    constructor(clubService) {
        this.clubService = clubService;
    }
    async getAllClubs() {
        return this.clubService.getAllClubs();
    }
    async getClubById(id) {
        return this.clubService.getClubById(id);
    }
    async getClubPlayers(id) {
        return this.clubService.getClubPlayers(id);
    }
    async createClub(clubData) {
        return this.clubService.createClub(clubData);
    }
    async updateClub(id, updatedClubData) {
        console.log('updatedClubData', updatedClubData);
        return this.clubService.updateClub(id, updatedClubData);
    }
    async deleteClub(id) {
        return this.clubService.deleteClub(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ClubController.prototype, "getAllClubs", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ClubController.prototype, "getClubById", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id/players'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ClubController.prototype, "getClubPlayers", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof api_1.IClub !== "undefined" && api_1.IClub) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ClubController.prototype, "createClub", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ClubController.prototype, "updateClub", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ClubController.prototype, "deleteClub", null);
exports.ClubController = ClubController = tslib_1.__decorate([
    (0, common_1.Controller)('club'),
    (0, public_decorator_1.Public)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof club_service_1.ClubService !== "undefined" && club_service_1.ClubService) === "function" ? _a : Object])
], ClubController);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const Neo4jUser_service_1 = __webpack_require__(32);
const jwt_1 = __webpack_require__(25);
let AuthService = exports.AuthService = AuthService_1 = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async signIn(emailAddress, pass) {
        const user = await this.usersService.findOne(emailAddress);
        this.logger.log(`emailAddress: ${emailAddress} trying to authenticate...`);
        console.log('user: ', user);
        console.log('pass: ', pass);
        console.log('user.passwordHash: ', user.passwordHash);
        if (!(await this.usersService.validatePassword(pass, user.passwordHash))) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.Id, username: user.emailAddress, role: user.role };
        const accessToken = await this.jwtService.signAsync(payload);
        console.log('payload: ', payload);
        console.log('accessToken: ', accessToken);
        return {
            access_token: accessToken,
        };
    }
    isLoggedIn(token) {
        try {
            // Verify the token and check if it's valid
            const decodedToken = this.jwtService.verify(token);
            return !!decodedToken;
        }
        catch (error) {
            // Token verification failed
            return false;
        }
    }
};
exports.AuthService = AuthService = AuthService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Neo4jUser_service_1.Neo4jUserService !== "undefined" && Neo4jUser_service_1.Neo4jUserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(49);
const jwt_1 = __webpack_require__(25);
const auth_controller_1 = __webpack_require__(51);
const core_1 = __webpack_require__(2);
const auth_guard_1 = __webpack_require__(53);
const config_1 = __webpack_require__(54);
const backendFeatures_module_1 = __webpack_require__(24);
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    global: true,
                    secret: 'yourSecretKey',
                    signOptions: { expiresIn: '3600s' },
                }),
            }),
            backendFeatures_module_1.BackendFeaturesModule,
        ],
        providers: [
            auth_service_1.AuthService,
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(49);
const public_decorator_1 = __webpack_require__(52);
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto['emailAddress'], signInDto['password']);
    }
};
tslib_1.__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Record !== "undefined" && Record) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(25);
const core_1 = __webpack_require__(2);
const public_decorator_1 = __webpack_require__(52);
let AuthGuard = exports.AuthGuard = class AuthGuard {
    constructor(jwtService, reflector) {
        this.jwtService = jwtService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            // 💡 See this condition
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: 'yourSecretKey',
            });
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], AuthGuard);


/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(56);
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api/',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/avans-nx-workshop',
    NEO4J_SCHEME: 'neo4j',
    NEO4J_HOST: 'localhost',
    NEO4J_PORT: '7687',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'ticketshop2003',
    NEO4J_DATABASE: 'neo4j',
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const dto_1 = __webpack_require__(18);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const corsOptions = {};
    app.enableCors(corsOptions);
    app.useGlobalInterceptors(new dto_1.ApiResponseInterceptor());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application: data-api is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map