package com.codestates.stackOverflow.question.dto;

import com.codestates.stackOverflow.audit.Auditable;
import lombok.Builder;
import lombok.Getter;

//test
@Getter
public class PatchEditor extends Auditable{
    private final String title;
    private final String body;

    @Builder
    public PatchEditor(String title, String body){
        this.title = title;
        this.body = body;
//        this.updatedAt = setUpdatedAt();
    }
}
