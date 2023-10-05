package com.appsmith.external.models;

import com.appsmith.external.helpers.Identifiable;
import com.appsmith.external.views.Views;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Transient;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PackageDTO implements Identifiable {
    @Transient
    @JsonView(Views.Public.class)
    private String id;

    @Transient
    @JsonView(Views.Export.class)
    private String packageUUID;

    @JsonView(Views.Public.class)
    String name;

    @Transient
    @JsonView(Views.Public.class)
    String workspaceId;

    @Transient
    @JsonView(Views.Public.class)
    String icon;

    @Transient
    @JsonView(Views.Public.class)
    String color;

    @Transient
    @JsonView(Views.Public.class)
    public Set<String> userPermissions = new HashSet<>();
}