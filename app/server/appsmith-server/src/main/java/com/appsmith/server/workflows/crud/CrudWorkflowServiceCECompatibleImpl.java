package com.appsmith.server.workflows.crud;

import com.appsmith.server.domains.Workflow;
import com.appsmith.server.exceptions.AppsmithError;
import com.appsmith.server.exceptions.AppsmithException;
import com.appsmith.server.repositories.WorkflowRepository;
import com.appsmith.server.workflows.base.BaseWorkflowServiceImpl;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class CrudWorkflowServiceCECompatibleImpl extends BaseWorkflowServiceImpl
        implements CrudWorkflowServiceCECompatible {

    public CrudWorkflowServiceCECompatibleImpl(WorkflowRepository workflowRepository) {
        super(workflowRepository);
    }

    @Override
    public Mono<Workflow> createWorkflow(Workflow resource, String workspaceId) {
        return Mono.error(new AppsmithException(AppsmithError.UNSUPPORTED_OPERATION));
    }

    @Override
    public Mono<Workflow> updateWorkflow(Workflow workflowUpdate, String workflowId) {
        return Mono.error(new AppsmithException(AppsmithError.UNSUPPORTED_OPERATION));
    }

    @Override
    public Flux<Workflow> getAllWorkflows(String workspaceId) {
        return Flux.error(new AppsmithException(AppsmithError.UNSUPPORTED_OPERATION));
    }

    @Override
    public Mono<Workflow> getWorkflowById(String workflowId) {
        return Mono.error(new AppsmithException(AppsmithError.UNSUPPORTED_OPERATION));
    }

    @Override
    public Mono<Workflow> deleteWorkflow(String workflowId) {
        return Mono.error(new AppsmithException(AppsmithError.UNSUPPORTED_OPERATION));
    }
}