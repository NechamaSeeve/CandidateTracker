using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTracker : ControllerBase
    {
        public readonly string _connectionString;
        public CandidateTracker(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost("addcandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.AddCandidate(candidate);



        }
        [HttpGet("getPending")]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetPending().ToList();
        }
        [HttpGet("getbyId")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost("updatedeniedStatus")]
        public void UpdateDeniedStatus(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            //candidate.Status = Status.Denied;
            repo.Update(candidate);
        }
        //[HttpPost("updateConfirmedStatus")]
        //public void UpdateConfirmed(Candidate candidate)
        //{
        //    var repo = new CandidateRepository(_connectionString);
        //    //candidate.Status = Status.Confirmed;
        //    repo.Update(candidate);
        //}
    }

}
