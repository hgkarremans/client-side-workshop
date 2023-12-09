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
const app_controller_1 = __webpack_require__(38);
const app_service_1 = __webpack_require__(39);
const mongoose_1 = __webpack_require__(23);
const features_2 = __webpack_require__(5);
const util_env_1 = __webpack_require__(40);
const dist_1 = __webpack_require__(29);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [features_1.MealModule,
            features_2.BackendFeaturesModule,
            features_1.AuthModule,
            mongoose_1.MongooseModule.forRoot(util_env_1.environment.apiUrl),
            dist_1.Neo4jModule.forRoot({
                scheme: util_env_1.environment.NEO4J_SCHEME,
                host: util_env_1.environment.NEO4J_HOST,
                port: util_env_1.environment.NEO4J_PORT,
                username: util_env_1.environment.NEO4J_USERNAME,
                password: util_env_1.environment.NEO4J_PASSWORD,
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
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);


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
const dto_1 = __webpack_require__(15);
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 16 */
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
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMealDto = exports.UpsertMealDto = exports.CreateMealDto = void 0;
const tslib_1 = __webpack_require__(4);
const class_validator_1 = __webpack_require__(18);
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
/* 18 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseInterceptor = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const operators_1 = __webpack_require__(20);
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
/* 20 */
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackendFeaturesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(22); // Import JwtModule first
const mongoose_1 = __webpack_require__(23);
const ticket_controller_1 = __webpack_require__(24);
const ticket_service_1 = __webpack_require__(25);
const ticket_schema_1 = __webpack_require__(27);
const Neo4jUser_service_1 = __webpack_require__(28);
const Neo4jUser_controller_1 = __webpack_require__(31);
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
        ],
        controllers: [ticket_controller_1.TicketController, Neo4jUser_controller_1.UserController],
        providers: [ticket_service_1.TicketService, Neo4jUser_service_1.Neo4jUserService],
        exports: [ticket_service_1.TicketService, Neo4jUser_service_1.Neo4jUserService],
    })
], BackendFeaturesModule);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketController = void 0;
const tslib_1 = __webpack_require__(4);
const ticket_service_1 = __webpack_require__(25);
const api_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const public_decorator_1 = __webpack_require__(42);
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
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof api_1.ITicket !== "undefined" && api_1.ITicket) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TicketController.prototype, "addTicket", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TicketController.prototype, "deleteTicket", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof Partial !== "undefined" && Partial) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TicketController.prototype, "updateTicket", null);
exports.TicketController = TicketController = tslib_1.__decorate([
    (0, common_1.Controller)('ticket'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ticket_service_1.TicketService !== "undefined" && ticket_service_1.TicketService) === "function" ? _a : Object])
], TicketController);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(23);
const mongoose_2 = __webpack_require__(26);
const ticket_schema_1 = __webpack_require__(27); // Import the correct types
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
};
exports.TicketService = TicketService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(ticket_schema_1.Ticket.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TicketService);


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicketSchema = exports.Ticket = void 0;
const tslib_1 = __webpack_require__(4);
const mongoose_1 = __webpack_require__(23);
const api_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(18);
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
exports.Ticket = Ticket = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Neo4jUserService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const api_1 = __webpack_require__(10);
const common_2 = __webpack_require__(1);
const dist_1 = __webpack_require__(29);
const bcrypt = tslib_1.__importStar(__webpack_require__(30));
const jwt_1 = __webpack_require__(22);
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
        user.friends = $friends,
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
        user.friends = $friends,
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
            friends: newUser.friends || [],
            hasTransportation: newUser.hasTransportation || false,
            passwordHash: hashedPassword,
        });
        // Generate a JWT for the newly created user
        const userProperties = result.records[0]?.get('user').properties;
        const payload = { sub: userProperties.Id, username: userProperties.emailAddress };
        const accessToken = await this.jwtService.signAsync(payload);
        console.log('payload: ', payload);
        console.log('accessToken:', accessToken); // Log the JWT for debugging
        // Include the JWT in the response
        return { user: userProperties, access_token: accessToken };
    }
    async update(Id, user) {
        common_2.Logger.log(`Update(${Id})`, this.TAG);
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
        user.friends = $friends
      RETURN user
    `;
        const result = await this.neo4jService.write(query, {
            Id: parseInt(Id),
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image,
            emailAddress: user.emailAddress,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            role: user.role,
            friends: user.friends || [],
        });
        return result.records;
    }
    async delete(Id) {
        common_2.Logger.log(`Delete(${Id})`, this.TAG);
        const query = `MATCH (n) WHERE n.Id = $Id DETACH DELETE n`;
        const result = await this.neo4jService.write(query, { Id: parseInt(Id) });
        return result;
    }
    async validatePassword(password, passwordHash) {
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
/* 29 */
/***/ ((module) => {

module.exports = require("nest-neo4j/dist");

/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const Neo4jUser_service_1 = __webpack_require__(28);
const api_1 = __webpack_require__(10);
const public_decorator_1 = __webpack_require__(43);
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
        console.log("Id in controller: ", Id);
        console.log("controller user: ", user);
        return user;
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
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const Neo4jUser_service_1 = __webpack_require__(28);
const jwt_1 = __webpack_require__(22);
let AuthService = exports.AuthService = AuthService_1 = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async signIn(emailAddress, pass) {
        const user = await this.usersService.findOne(emailAddress);
        this.logger.log(`emailAddress: ${emailAddress} trying to authenticate...`);
        if (!await this.usersService.validatePassword(pass, user.passwordHash)) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { sub: user.Id, username: user.emailAddress };
        return {
            access_token: await this.jwtService.signAsync(payload),
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
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(32);
const jwt_1 = __webpack_require__(22);
const auth_controller_1 = __webpack_require__(34);
const core_1 = __webpack_require__(2);
const auth_guard_1 = __webpack_require__(36);
const config_1 = __webpack_require__(37);
const backendFeatures_module_1 = __webpack_require__(21);
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
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(32);
const public_decorator_1 = __webpack_require__(35);
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
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(22);
const core_1 = __webpack_require__(2);
const public_decorator_1 = __webpack_require__(35);
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
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(39);
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
/* 39 */
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
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: false,
    apiUrl: 'mongodb://localhost:27017/avans-nx-workshop',
    MONGO_DB_CONNECTION_STRING: 'mongodb://localhost:27017/avans-nx-workshop',
    NEO4J_SCHEME: 'neo4j',
    NEO4J_HOST: 'localhost',
    NEO4J_PORT: '7687',
    NEO4J_USERNAME: 'neo4j',
    NEO4J_PASSWORD: 'ticketshop2003',
    NEO4J_DATABASE: 'TicketShopUsers',
};


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
// public.decorator.ts
const common_1 = __webpack_require__(1);
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


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
const dto_1 = __webpack_require__(15);
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