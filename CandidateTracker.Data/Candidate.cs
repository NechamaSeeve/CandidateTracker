﻿using Microsoft.Identity.Client;

namespace CandidateTracker.Data
{
    public class Candidate
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Notes { get; set; }
        public Status Status { get; set; }
    }
}
public enum Status
{
    Pending,
    Confirmed,
    Denied
};