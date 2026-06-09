// English Words App — data/cefr.ts
// CEFR level mapping for vocabulary words
// A1 (beginner) → A2 (elementary) → B1 (intermediate) →
// B2 (upper-intermediate) → C1 (advanced) → C2 (mastery)

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// ── Explicit word → level mapping ────────────────────────────
export const CEFR_MAP: Record<string, CefrLevel> = {
  // ── A1: Most basic vocabulary ─────────────────────────────
  'able':'A1','about':'A1','above':'A1','after':'A1','again':'A1','age':'A1',
  'ago':'A1','agree':'A1','all':'A1','also':'A1','always':'A1','and':'A1',
  'answer':'A1','any':'A1','apple':'A1','are':'A1','arm':'A1','ask':'A1',
  'at':'A1','back':'A1','bad':'A1','bag':'A1','ball':'A1','banana':'A1',
  'bank':'A1','be':'A1','because':'A1','bed':'A1','big':'A1','bird':'A1',
  'book':'A1','boy':'A1','bread':'A1','brother':'A1','but':'A1','buy':'A1',
  'by':'A1','call':'A1','can':'A1','car':'A1','cat':'A1','chair':'A1',
  'child':'A1','city':'A1','clean':'A1','clock':'A1','close':'A1','cold':'A1',
  'come':'A1','cook':'A1','country':'A1','cut':'A1','dad':'A1','day':'A1',
  'do':'A1','dog':'A1','door':'A1','down':'A1','drink':'A1','drive':'A1',
  'eat':'A1','egg':'A1','end':'A1','enjoy':'A1','evening':'A1','eye':'A1',
  'face':'A1','family':'A1','far':'A1','fast':'A1','feel':'A1','find':'A1',
  'fish':'A1','floor':'A1','flower':'A1','fly':'A1','food':'A1','foot':'A1',
  'for':'A1','free':'A1','friend':'A1','from':'A1','fruit':'A1','fun':'A1',
  'get':'A1','girl':'A1','give':'A1','go':'A1','good':'A1','great':'A1',
  'green':'A1','grow':'A1','hand':'A1','happy':'A1','have':'A1','he':'A1',
  'head':'A1','hear':'A1','help':'A1','her':'A1','here':'A1','high':'A1',
  'him':'A1','his':'A1','home':'A1','hot':'A1','house':'A1','how':'A1',
  'if':'A1','in':'A1','it':'A1','job':'A1','jump':'A1','just':'A1',
  'keep':'A1','kid':'A1','know':'A1','large':'A1','last':'A1','learn':'A1',
  'leave':'A1','left':'A1','leg':'A1','let':'A1','like':'A1','little':'A1',
  'live':'A1','long':'A1','look':'A1','love':'A1','low':'A1','make':'A1',
  'man':'A1','many':'A1','me':'A1','meet':'A1','milk':'A1','miss':'A1',
  'mom':'A1','money':'A1','more':'A1','morning':'A1','mother':'A1','mouth':'A1',
  'move':'A1','much':'A1','name':'A1','need':'A1','new':'A1','next':'A1',
  'nice':'A1','night':'A1','no':'A1','not':'A1','now':'A1','number':'A1',
  'of':'A1','off':'A1','often':'A1','old':'A1','on':'A1','one':'A1',
  'open':'A1','or':'A1','our':'A1','out':'A1','over':'A1','own':'A1',
  'pay':'A1','people':'A1','phone':'A1','play':'A1','put':'A1','read':'A1',
  'red':'A1','right':'A1','road':'A1','run':'A1','say':'A1','school':'A1',
  'see':'A1','she':'A1','show':'A1','sit':'A1','sleep':'A1','small':'A1',
  'so':'A1','some':'A1','son':'A1','speak':'A1','start':'A1','stay':'A1',
  'stop':'A1','street':'A1','sun':'A1','swim':'A1','take':'A1','talk':'A1',
  'tell':'A1','thank':'A1','the':'A1','their':'A1','them':'A1','there':'A1',
  'they':'A1','think':'A1','this':'A1','time':'A1','to':'A1','today':'A1',
  'together':'A1','too':'A1','tree':'A1','try':'A1','turn':'A1','under':'A1',
  'up':'A1','use':'A1','very':'A1','walk':'A1','want':'A1','water':'A1',
  'we':'A1','well':'A1','what':'A1','when':'A1','where':'A1','who':'A1',
  'why':'A1','win':'A1','with':'A1','woman':'A1','work':'A1','world':'A1',
  'write':'A1','year':'A1','yes':'A1','you':'A1','young':'A1','your':'A1',

  // ── A2: Elementary ────────────────────────────────────────
  'abroad':'A2','accept':'A2','accident':'A2','addition':'A2','address':'A2',
  'afford':'A2','afraid':'A2','airport':'A2','alone':'A2','already':'A2',
  'although':'A2','amount':'A2','angry':'A2','animal':'A2','another':'A2',
  'area':'A2','arrive':'A2','art':'A2','available':'A2','awful':'A2',
  'become':'A2','before':'A2','behaviour':'A2','believe':'A2','below':'A2',
  'better':'A2','between':'A2','birthday':'A2','body':'A2','bored':'A2',
  'boring':'A2','boss':'A2','bother':'A2','breakfast':'A2','bridge':'A2',
  'bring':'A2','build':'A2','bus':'A2','business':'A2','busy':'A2',
  'cafe':'A2','cake':'A2','calm':'A2','camera':'A2','careful':'A2',
  'carry':'A2','catch':'A2','cause':'A2','celebrate':'A2','centre':'A2',
  'certain':'A2','change':'A2','cheap':'A2','check':'A2','cheese':'A2',
  'cinema':'A2','class':'A2','clever':'A2','clothes':'A2','coffee':'A2',
  'college':'A2','colour':'A2','comfortable':'A2','compare':'A2','computer':'A2',
  'cool':'A2','correct':'A2','cost':'A2','could':'A2','couple':'A2',
  'create':'A2','customer':'A2','damage':'A2','dangerous':'A2','date':'A2',
  'decide':'A2','delay':'A2','describe':'A2','design':'A2','die':'A2',
  'different':'A2','difficult':'A2','dinner':'A2','direct':'A2','discover':'A2',
  'discuss':'A2','double':'A2','draw':'A2','dream':'A2','dress':'A2',
  'during':'A2','early':'A2','easy':'A2','email':'A2','empty':'A2',
  'enough':'A2','enter':'A2','environment':'A2','especially':'A2','even':'A2',
  'every':'A2','everyone':'A2','everything':'A2','excellent':'A2','except':'A2',
  'excited':'A2','exercise':'A2','expensive':'A2','experience':'A2','explain':'A2',
  'extra':'A2','factory':'A2','fall':'A2','famous':'A2','fantastic':'A2',
  'fashion':'A2','fat':'A2','father':'A2','favourite':'A2','feed':'A2',
  'few':'A2','film':'A2','finish':'A2','flat':'A2','follow':'A2',
  'forget':'A2','form':'A2','forward':'A2','fresh':'A2','full':'A2',
  'future':'A2','game':'A2','garden':'A2','goal':'A2','got':'A2',
  'group':'A2','guess':'A2','guest':'A2','guide':'A2','guitar':'A2',
  'gym':'A2','half':'A2','hard':'A2','hate':'A2','heavy':'A2',
  'history':'A2','hold':'A2','holiday':'A2','homework':'A2','hope':'A2',
  'hospital':'A2','hotel':'A2','hour':'A2','hungry':'A2','hurry':'A2',
  'hurt':'A2','idea':'A2','imagine':'A2','important':'A2','inside':'A2',
  'interest':'A2','interesting':'A2','internet':'A2','introduce':'A2','invite':'A2',
  'kind':'A2','kitchen':'A2','language':'A2','later':'A2','laugh':'A2',
  'letter':'A2','library':'A2','lose':'A2','lunch':'A2','map':'A2',
  'match':'A2','maybe':'A2','meal':'A2','member':'A2','message':'A2',
  'minute':'A2','modern':'A2','month':'A2','most':'A2','music':'A2',
  'near':'A2','neck':'A2','neighbour':'A2','never':'A2','news':'A2',
  'notebook':'A2','nothing':'A2','once':'A2','online':'A2','only':'A2',
  'order':'A2','other':'A2','outside':'A2','page':'A2','paint':'A2',
  'park':'A2','party':'A2','pass':'A2','past':'A2','place':'A2',
  'plan':'A2','plant':'A2','point':'A2','police':'A2',
  'poor':'A2','popular':'A2','possible':'A2','prepare':'A2','present':'A2',
  'price':'A2','probably':'A2','problem':'A2','programme':'A2','project':'A2',
  'promise':'A2','pull':'A2','push':'A2','question':'A2','quick':'A2',
  'quiet':'A2','quite':'A2','rain':'A2','reach':'A2','ready':'A2',
  'real':'A2','reason':'A2','receive':'A2','remember':'A2','reply':'A2',
  'result':'A2','return':'A2','rich':'A2','river':'A2','room':'A2',
  'sad':'A2','safe':'A2','same':'A2','save':'A2','scared':'A2',
  'second':'A2','sell':'A2','send':'A2','sentence':'A2','serious':'A2',
  'shall':'A2','share':'A2','should':'A2','shout':'A2','side':'A2',
  'simple':'A2','since':'A2','sister':'A2','slow':'A2','smile':'A2',
  'social':'A2','sorry':'A2','sort':'A2','sound':'A2','spend':'A2',
  'sport':'A2','stand':'A2','story':'A2','strange':'A2','strong':'A2',
  'study':'A2','suddenly':'A2','suggest':'A2','sure':'A2','surprise':'A2',
  'system':'A2','teach':'A2','teacher':'A2','team':'A2','temperature':'A2',
  'tired':'A2','town':'A2','train':'A2','travel':'A2',
  'true':'A2','trust':'A2','ugly':'A2','understand':'A2','university':'A2',
  'until':'A2','usually':'A2','visit':'A2','voice':'A2','wait':'A2',
  'warm':'A2','watch':'A2','weather':'A2','week':'A2','while':'A2',
  'wide':'A2','window':'A2','worry':'A2','worse':'A2','wrong':'A2',

  // ── B1: Intermediate ──────────────────────────────────────
  'ability':'B1','absence':'B1','achieve':'B1','active':'B1',
  'actually':'B1','add':'B1','advantage':'B1','advice':'B1','affect':'B1',
  'afterwards':'B1','agent':'B1','aircraft':'B1','alike':'B1',
  'allow':'B1','amazing':'B1','ambition':'B1','announce':'B1','annual':'B1',
  'apart':'B1','apologise':'B1','application':'B1','apply':'B1','appointment':'B1',
  'appreciate':'B1','appropriate':'B1','approximately':'B1','arrangement':'B1','aside':'B1',
  'aspect':'B1','assess':'B1','assist':'B1','associate':'B1','assume':'B1',
  'attempt':'B1','attend':'B1','attention':'B1','attitude':'B1','attraction':'B1',
  'audience':'B1','author':'B1','avoid':'B1','aware':'B1','balance':'B1',
  'ban':'B1','base':'B1','basic':'B1','battle':'B1','belong':'B1',
  'benefit':'B1','besides':'B1','both':'B1','budget':'B1','capable':'B1',
  'career':'B1','challenge':'B1','chance':'B1','character':'B1',
  'charge':'B1','charity':'B1','choice':'B1','claim':'B1','clear':'B1',
  'collect':'B1','committee':'B1','communicate':'B1','community':'B1','complete':'B1',
  'complex':'B1','concern':'B1','condition':'B1','confidence':'B1','confirm':'B1',
  'conflict':'B1','connection':'B1','considerable':'B1','constantly':'B1','content':'B1',
  'continue':'B1','contract':'B1','control':'B1','convenient':'B1','conversation':'B1',
  'copy':'B1','current':'B1','deal':'B1','deadline':'B1','decision':'B1',
  'degree':'B1','deliver':'B1','depend':'B1','depth':'B1','detailed':'B1',
  'develop':'B1','difference':'B1','disaster':'B1','distance':'B1','documentary':'B1',
  'download':'B1','education':'B1','effective':'B1','effort':'B1','election':'B1',
  'employ':'B1','encourage':'B1','entertainment':'B1','entire':'B1','equal':'B1',
  'error':'B1','estimate':'B1','eventually':'B1','examine':'B1','exist':'B1',
  'expect':'B1','experiment':'B1','expert':'B1','express':'B1','fail':'B1',
  'focus':'B1','forest':'B1','government':'B1','habit':'B1','handle':'B1',
  'identify':'B1','improve':'B1','include':'B1','increase':'B1','individual':'B1',
  'influence':'B1','information':'B1','issue':'B1','join':'B1','knowledge':'B1',
  'lack':'B1','lately':'B1','law':'B1','leader':'B1','lead':'B1',
  'limit':'B1','local':'B1','main':'B1','major':'B1','manage':'B1',
  'manner':'B1','medicine':'B1','mental':'B1','method':'B1','mind':'B1',
  'model':'B1','moment':'B1','mostly':'B1','natural':'B1','necessary':'B1',
  'normal':'B1','notice':'B1','occur':'B1','offer':'B1','official':'B1',
  'operation':'B1','opinion':'B1','opportunity':'B1','option':'B1','organisation':'B1',
  'otherwise':'B1','overcome':'B1','particular':'B1','performance':'B1','period':'B1',
  'personal':'B1','physical':'B1','population':'B1','position':'B1','positive':'B1',
  'practical':'B1','prevent':'B1','process':'B1','produce':'B1','professional':'B1',
  'progress':'B1','protect':'B1','prove':'B1','provide':'B1','purpose':'B1',
  'quality':'B1','react':'B1','recent':'B1','reduce':'B1','refer':'B1',
  'relate':'B1','relevant':'B1','report':'B1','represent':'B1','require':'B1',
  'research':'B1','risk':'B1','role':'B1','scene':'B1','section':'B1',
  'select':'B1','senior':'B1','set':'B1','situation':'B1','skill':'B1',
  'solution':'B1','source':'B1','standard':'B1','statement':'B1','subject':'B1',
  'success':'B1','support':'B1','task':'B1','technology':'B1',
  'topic':'B1','throughout':'B1','tradition':'B1','treatment':'B1','trend':'B1',
  'typical':'B1','unless':'B1','various':'B1','willing':'B1',

  // ── B2: Upper-Intermediate ────────────────────────────────
  'abstract':'B2','abundant':'B2','acquire':'B2','adaptation':'B2','adequate':'B2',
  'adjacent':'B2','administration':'B2','advocate':'B2','alter':'B2','ambiguous':'B2',
  'analyse':'B2','anticipate':'B2','apparent':'B2','approach':'B2',
  'atmosphere':'B2','authority':'B2','category':'B2','chronic':'B2',
  'circumstance':'B2','colleague':'B2','combine':'B2','commit':'B2','competence':'B2',
  'concept':'B2','conclusion':'B2','conduct':'B2','consequence':'B2','construct':'B2',
  'contradict':'B2','contrast':'B2','contribute':'B2','controversial':'B2','convince':'B2',
  'cope':'B2','correspond':'B2','criteria':'B2','crucial':'B2','cultural':'B2',
  'decline':'B2','deduce':'B2','define':'B2','deliberately':'B2','demonstrate':'B2',
  'deny':'B2','determine':'B2','dimension':'B2','discipline':'B2','dispute':'B2',
  'distinct':'B2','distribution':'B2','diverse':'B2','dominant':'B2','dramatic':'B2',
  'efficient':'B2','elaborate':'B2','element':'B2','emerge':'B2','emphasis':'B2',
  'enable':'B2','encounter':'B2','enhance':'B2','enormous':'B2','ensure':'B2',
  'evaluate':'B2','evolution':'B2','exceed':'B2','exclude':'B2','exhibit':'B2',
  'expand':'B2','explicit':'B2','explore':'B2','expose':'B2','extensive':'B2',
  'feature':'B2','flexible':'B2','framework':'B2','function':'B2','fundamental':'B2',
  'generate':'B2','global':'B2','gradual':'B2','highlight':'B2','hypothesis':'B2',
  'imply':'B2','incorporate':'B2','indicate':'B2','inevitable':'B2',
  'insight':'B2','integrate':'B2','intellectual':'B2','investigate':'B2','justify':'B2',
  'logical':'B2','maintain':'B2','mechanism':'B2','modify':'B2','monitor':'B2',
  'moreover':'B2','motivate':'B2','neutral':'B2','nevertheless':'B2','numerous':'B2',
  'objective':'B2','obtain':'B2','outcome':'B2','overall':'B2','overlap':'B2',
  'participate':'B2','phenomenon':'B2','policy':'B2','potential':'B2','precise':'B2',
  'predict':'B2','preliminary':'B2','principle':'B2','priority':'B2','procedure':'B2',
  'promote':'B2','proportion':'B2','pursue':'B2','range':'B2','rational':'B2',
  'realistic':'B2','recognise':'B2','regulate':'B2','reinforce':'B2','rely':'B2',
  'resolution':'B2','resource':'B2','reveal':'B2','reverse':'B2','revision':'B2',
  'significant':'B2','specific':'B2','status':'B2','stimulate':'B2','strategy':'B2',
  'substantial':'B2','sufficient':'B2','suitable':'B2','summarise':'B2','survey':'B2',
  'sustain':'B2','theory':'B2','transform':'B2','transition':'B2',
  'ultimately':'B2','undermine':'B2','valid':'B2','variable':'B2','whereas':'B2',

  // ── C1: Advanced ──────────────────────────────────────────
  'abate':'C1','abdicate':'C1','aberration':'C1','abolish':'C1','abrupt':'C1',
  'abstain':'C1','abstraction':'C1','acknowledge':'C1','acquiesce':'C1','acute':'C1',
  'adamant':'C1','adept':'C1','adversary':'C1','aggregate':'C1',
  'allegiance':'C1','alleviate':'C1','allocation':'C1','ambivalent':'C1','ameliorate':'C1',
  'analogous':'C1','anomaly':'C1','arbitrary':'C1','arduous':'C1',
  'articulate':'C1','aspiration':'C1','assertion':'C1','assumption':'C1','astute':'C1',
  'attribute':'C1','augment':'C1','autonomous':'C1','bias':'C1','candid':'C1',
  'catalyst':'C1','coherent':'C1','compelling':'C1','comply':'C1','compromise':'C1',
  'conceive':'C1','conducive':'C1','confrontation':'C1','contemporary':'C1','contend':'C1',
  'contingent':'C1','conviction':'C1','correlate':'C1','critique':'C1','culminate':'C1',
  'curtail':'C1','cynical':'C1','dedicate':'C1','defer':'C1','deficiency':'C1',
  'deliberate':'C1','delineate':'C1','depict':'C1','derivative':'C1','deteriorate':'C1',
  'deviate':'C1','dilemma':'C1','discrepancy':'C1','disparity':'C1','disposition':'C1',
  'doctrine':'C1','dubious':'C1','dynamic':'C1','elusive':'C1','eminent':'C1',
  'empirical':'C1','endorse':'C1','enumerate':'C1','epitome':'C1','equivocal':'C1',
  'esteem':'C1','facilitate':'C1','feasible':'C1','fluctuate':'C1','formidable':'C1',
  'fortify':'C1','furthermore':'C1','glaring':'C1','hamper':'C1',
  'hinder':'C1','holistic':'C1','hypothetical':'C1','impair':'C1','implement':'C1',
  'implicit':'C1','induce':'C1','inherent':'C1','innovation':'C1','integral':'C1',
  'integrity':'C1','intrinsic':'C1','invoke':'C1','jeopardise':'C1','legitimate':'C1',
  'manifest':'C1','meticulous':'C1','mitigate':'C1','moderate':'C1','mutual':'C1',
  'naive':'C1','negligible':'C1','notion':'C1','nuance':'C1','obsolete':'C1',
  'opposition':'C1','paradox':'C1','paramount':'C1','perception':'C1','persist':'C1',
  'pertinent':'C1','plausible':'C1','precedent':'C1','predominant':'C1','prejudice':'C1',
  'presumption':'C1','prevail':'C1','profound':'C1','proliferation':'C1','proposition':'C1',
  'rationale':'C1','reconcile':'C1','reluctant':'C1','remnant':'C1',
  'rhetoric':'C1','scrutiny':'C1','secede':'C1','seize':'C1','simultaneous':'C1',
  'speculation':'C1','sporadic':'C1','subordinate':'C1','supplement':'C1','suppress':'C1',
  'suspend':'C1','synthesise':'C1','tendency':'C1','termination':'C1','testimony':'C1',
  'threshold':'C1','ubiquitous':'C1','unprecedented':'C1','urge':'C1',
  'utilise':'C1','volatile':'C1','vulnerable':'C1','warranted':'C1','widespread':'C1',

  // ── C2: Mastery ───────────────────────────────────────────
  'abject':'C2','abrogate':'C2','acrimony':'C2','acumen':'C2','admonish':'C2',
  'affluent':'C2','allegory':'C2','altruism':'C2','ambivalence':'C2','anachronism':'C2',
  'antipathy':'C2','apathy':'C2','apprehension':'C2','audacious':'C2',
  'bigotry':'C2','cantankerous':'C2','capitulate':'C2','catharsis':'C2','caveat':'C2',
  'chauvinism':'C2','chicanery':'C2','circumspect':'C2','cogent':'C2','condescend':'C2',
  'consecrate':'C2','consternation':'C2','contentious':'C2','conundrum':'C2','culpable':'C2',
  'deference':'C2','degenerate':'C2','demagogue':'C2','deprecate':'C2','derisive':'C2',
  'despicable':'C2','devious':'C2','dichotomy':'C2','disingenuous':'C2','dogmatic':'C2',
  'duplicity':'C2','eccentric':'C2','eloquent':'C2','embroil':'C2','endemic':'C2',
  'ephemeral':'C2','equanimity':'C2','esoteric':'C2','euphemism':'C2','exacerbate':'C2',
  'exorbitant':'C2','expedient':'C2','fallacy':'C2','fastidious':'C2','flippant':'C2',
  'foreboding':'C2','garrulous':'C2','grandiose':'C2','hypocritical':'C2','immutable':'C2',
  'impeccable':'C2','impervious':'C2','incessant':'C2','incoherent':'C2','incredulous':'C2',
  'indignant':'C2','indolent':'C2','ineffable':'C2','insidious':'C2','intransigent':'C2',
  'irrefutable':'C2','judicious':'C2','magnanimous':'C2','malevolent':'C2','mendacious':'C2',
  'nonchalant':'C2','obfuscate':'C2','obsequious':'C2','obtuse':'C2',
  'ostracise':'C2','pedantic':'C2','pernicious':'C2','perturbation':'C2','plethora':'C2',
  'pompous':'C2','precarious':'C2','precipitate':'C2','presumptuous':'C2','prevaricate':'C2',
  'probity':'C2','procrastinate':'C2','propitious':'C2','punctilious':'C2','pusillanimous':'C2',
  'querulous':'C2','quixotic':'C2','recalcitrant':'C2','sanguine':'C2','sycophant':'C2',
  'truculent':'C2','vacillate':'C2','verbose':'C2','vindictive':'C2','wistful':'C2',
};

// ── Heuristic for unmapped words ──────────────────────────────
const _cefrCache = new Map<string, CefrLevel>();

export function getCefrLevel(word: string): CefrLevel {
  const w = word.toLowerCase();
  const cached = _cefrCache.get(w);
  if (cached) return cached;

  let result: CefrLevel;

  // Check explicit mapping first
  const mapped = CEFR_MAP[w];
  if (mapped) { result = mapped; }
  else {
    const len = w.length;

    // Academic/specialized suffixes → advanced
    if (w.endsWith('ification') || w.endsWith('isation') || w.endsWith('ization')) result = 'C1';
    else if (w.endsWith('ology') || w.endsWith('ography') || w.endsWith('ometry')) result = 'C1';
    else if (w.endsWith('itious') || w.endsWith('aneous') || w.endsWith('acious')) result = 'C1';
    else if (w.endsWith('ulent') || w.endsWith('escent') || w.endsWith('iferous')) result = 'C2';
    else if (w.endsWith('ous') && len > 12) result = 'C1';
    else if (w.endsWith('ive') && len > 12) result = 'C1';
    else if (w.endsWith('tion') && len > 13) result = 'C1';

    // Prefixes suggesting advanced vocab
    else if (w.startsWith('meta') && len > 8) result = 'C1';
    else if (w.startsWith('pseudo') || w.startsWith('quasi')) result = 'C1';
    else if (w.startsWith('anti') && len > 10) result = 'B2';
    else if (w.startsWith('inter') && len > 10) result = 'B2';
    else if (w.startsWith('over') && len > 8) result = 'B1';
    else if (w.startsWith('under') && len > 8) result = 'B1';
    else if (w.startsWith('re') && len > 8) result = 'B1';
    else if (w.startsWith('un') && len > 7) result = 'A2';

    // Length-based fallback (shorter words tend to be more common)
    else if (len <= 3) result = 'A1';
    else if (len <= 4) result = 'A2';
    else if (len <= 6) result = 'B1';
    else if (len <= 8) result = 'B2';
    else if (len <= 11) result = 'C1';
    else result = 'C2';
  }

  _cefrCache.set(w, result);
  return result;
}

// ── Level metadata ────────────────────────────────────────────
export const CEFR_META: Record<CefrLevel, { label: string; color: string; desc: string }> = {
  A1: { label: 'A1', color: '#27ae60', desc: 'Початківець' },
  A2: { label: 'A2', color: '#2ecc71', desc: 'Елементарний' },
  B1: { label: 'B1', color: '#d4ac0d', desc: 'Середній' },
  B2: { label: 'B2', color: '#e67e22', desc: 'Вище середнього' },
  C1: { label: 'C1', color: '#e74c3c', desc: 'Просунутий' },
  C2: { label: 'C2', color: '#8e44ad', desc: 'Майстерний' },
};
