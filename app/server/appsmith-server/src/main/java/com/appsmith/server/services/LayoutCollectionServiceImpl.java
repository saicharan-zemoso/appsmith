package com.appsmith.server.services;

import com.appsmith.server.actioncollections.base.ActionCollectionService;
import com.appsmith.server.domains.ActionCollection;
import com.appsmith.server.dtos.ActionCollectionDTO;
import com.appsmith.server.helpers.ModuleConsumable;
import com.appsmith.server.helpers.ResponseUtils;
import com.appsmith.server.layouts.UpdateLayoutService;
import com.appsmith.server.modules.moduleentity.ModuleEntityService;
import com.appsmith.server.newactions.base.NewActionService;
import com.appsmith.server.newpages.base.NewPageService;
import com.appsmith.server.refactors.applications.RefactoringService;
import com.appsmith.server.repositories.ActionCollectionRepository;
import com.appsmith.server.services.ce.LayoutCollectionServiceCEImpl;
import com.appsmith.server.solutions.ActionPermission;
import com.appsmith.server.solutions.PagePermission;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import static com.appsmith.server.modules.helpers.ModuleUtils.isModuleActionCollection;

@Service
@Slf4j
public class LayoutCollectionServiceImpl extends LayoutCollectionServiceCEImpl implements LayoutCollectionService {

    private final ModuleEntityService<ActionCollection> actionCollectionModuleEntityService;

    public LayoutCollectionServiceImpl(
            NewPageService newPageService,
            LayoutActionService layoutActionService,
            UpdateLayoutService updateLayoutService,
            RefactoringService refactoringService,
            ActionCollectionService actionCollectionService,
            NewActionService newActionService,
            AnalyticsService analyticsService,
            ResponseUtils responseUtils,
            ActionCollectionRepository actionCollectionRepository,
            PagePermission pagePermission,
            ActionPermission actionPermission,
            ModuleEntityService<ActionCollection> actionCollectionModuleEntityService) {
        super(
                newPageService,
                layoutActionService,
                updateLayoutService,
                refactoringService,
                actionCollectionService,
                newActionService,
                analyticsService,
                responseUtils,
                actionCollectionRepository,
                pagePermission,
                actionPermission);
        this.actionCollectionModuleEntityService = actionCollectionModuleEntityService;
    }

    @Override
    public Mono<ActionCollectionDTO> createCollection(ActionCollectionDTO collection, String branchName) {

        if (Boolean.TRUE.equals(isModuleActionCollection(collection))) {
            return actionCollectionModuleEntityService
                    .createPrivateEntity((ModuleConsumable) collection, branchName)
                    .map(entity -> (ActionCollectionDTO) entity);
        }

        return super.createCollection(collection, branchName);
    }
}
