package com.appsmith.server.modules.moduleentity;

import com.appsmith.external.models.BaseDomain;
import com.appsmith.server.domains.Module;
import com.appsmith.server.helpers.ModuleConsumable;
import reactor.core.publisher.Mono;

public interface ModuleEntityServiceCECompatible<T extends BaseDomain> {

    Mono<ModuleConsumable> createPublicEntity(String workspaceId, Module module, ModuleConsumable entity);

    Mono<ModuleConsumable> createPrivateEntity(ModuleConsumable entity, String branchName);
}
