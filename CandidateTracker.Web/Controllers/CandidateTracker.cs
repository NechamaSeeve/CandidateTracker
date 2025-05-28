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
            candidate.Status = Status.Denied;
            repo.Update(candidate);
        }
        [HttpPost("updateConfirmedStatus")]
        public void UpdateConfirmed(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.Status = Status.Confirmed;
            repo.Update(candidate);
        }
        [HttpGet("getConfirmed")]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetConfirmed().ToList();
        }
        [HttpGet("getDenied")]
        public List<Candidate> GetDenied()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetDenied().ToList();
        }
        [HttpGet("getPendingCount")]
        public object GetPendingCount()
        {
            var repo = new CandidateRepository(_connectionString);

            return new
            {
                count = repo.GetPendingCount()
            };
        }
        [HttpGet("getConfirmedCount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateRepository(_connectionString);

            return new
            {
                count = repo.GetConfirmedCount()
            };
        }
        [HttpGet("getDeniedCount")]
        public object GetDeniedCount()
        {
            var repo = new CandidateRepository(_connectionString);

            return new
            {
                count = repo.GetDeniedCount()
            };
        }

    }

}
