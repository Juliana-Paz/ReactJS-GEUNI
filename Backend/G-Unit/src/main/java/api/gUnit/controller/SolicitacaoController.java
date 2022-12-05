package api.gUnit.controller;

import api.gUnit.domain.Solicitacao;
import api.gUnit.service.ISolicitacaoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/solicitacao")
public class SolicitacaoController {

    private final ISolicitacaoService solicitacaoService;

    public SolicitacaoController(ISolicitacaoService solicitacaoService) {
        this.solicitacaoService = solicitacaoService;
    }


    @GetMapping("/{id}")
    public Solicitacao buscar(@PathVariable Long id) {
        return solicitacaoService.buscar(id);
    }

    @PostMapping
    public Solicitacao create(Solicitacao solicitacao) {
        return solicitacaoService.create(solicitacao);
    }

    public Solicitacao update(Solicitacao solicitacao) {
        return solicitacaoService.update(solicitacao);
    }
}
