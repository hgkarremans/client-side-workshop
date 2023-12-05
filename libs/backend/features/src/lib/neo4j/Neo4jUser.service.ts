import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import { Neo4jService } from "nest-neo4j/dist";

@Injectable()
export class Neo4jUserService {
  // TODO: use cypher query parameters in queries (https://neo4j.com/docs/cypher-manual/current/syntax/parameters/)
  private readonly logger:Logger = new Logger(Neo4jUserService.name);

  constructor(
    private readonly neo4jService: Neo4jService,
    // NOTE: circular refs, Anti pattern!!!
    // Use proper component design and avoid circular references -->
    // @Inject(forwardRef(() => MealsService)) private readonly mealsService: MealsService,
    // @Inject(forwardRef(() => MealsService)) private readonly cooksService: CooksService,
  ){
  }
}

